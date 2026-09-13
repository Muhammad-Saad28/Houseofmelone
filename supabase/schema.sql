-- ============================================================
-- HOUSE OF MELONE
-- MASTER SUPABASE / POSTGRESQL DATABASE SCHEMA
-- ============================================================

create extension if not exists "uuid-ossp";

-- ============================================================
-- 1. ENUMS
-- ============================================================

do $$ begin
  create type product_status as enum ('draft', 'active', 'archived');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type order_status as enum (
    'pending',
    'confirmed',
    'processing',
    'shipped',
    'delivered',
    'cancelled',
    'refunded'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type payment_status as enum (
    'pending',
    'paid',
    'failed',
    'refunded',
    'partially_refunded'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type fulfillment_status as enum (
    'unfulfilled',
    'partial',
    'fulfilled'
  );
exception when duplicate_object then null;
end $$;

do $$ begin
  create type discount_type as enum (
    'percentage',
    'fixed_amount'
  );
exception when duplicate_object then null;
end $$;


-- ============================================================
-- 2. PROFILES / CUSTOMERS
-- ============================================================

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,

  first_name text,
  last_name text,
  phone text,

  avatar_url text,

  is_admin boolean not null default false,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


-- ============================================================
-- 3. CATEGORIES
-- ============================================================

create table if not exists categories (
  id uuid primary key default uuid_generate_v4(),

  name text not null,
  slug text not null unique,

  description text,

  image_url text,

  parent_id uuid references categories(id) on delete set null,

  sort_order integer not null default 0,

  is_active boolean not null default true,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


-- ============================================================
-- 4. PRODUCTS
-- ============================================================

create table if not exists products (
  id uuid primary key default uuid_generate_v4(),

  category_id uuid references categories(id) on delete set null,

  name text not null,
  slug text not null unique,

  description text,

  short_description text,

  sku text unique,

  brand text default 'House of Melone',

  status product_status not null default 'draft',

  base_price numeric(12,2) not null default 0,

  compare_at_price numeric(12,2),

  cost_price numeric(12,2),

  currency text not null default 'PKR',

  stock_quantity integer not null default 0,

  low_stock_threshold integer not null default 5,

  is_featured boolean not null default false,

  is_new boolean not null default false,

  is_bestseller boolean not null default false,

  meta_title text,
  meta_description text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


-- ============================================================
-- 5. PRODUCT IMAGES
-- ============================================================

create table if not exists product_images (
  id uuid primary key default uuid_generate_v4(),

  product_id uuid not null
    references products(id)
    on delete cascade,

  image_url text not null,

  alt_text text,

  sort_order integer not null default 0,

  is_primary boolean not null default false,

  created_at timestamptz not null default now()
);


-- ============================================================
-- 6. PRODUCT VARIANTS
-- ============================================================

create table if not exists product_variants (
  id uuid primary key default uuid_generate_v4(),

  product_id uuid not null
    references products(id)
    on delete cascade,

  sku text unique,

  size text,
  color text,

  price numeric(12,2),

  compare_at_price numeric(12,2),

  stock_quantity integer not null default 0,

  weight numeric(10,2),

  is_active boolean not null default true,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


-- ============================================================
-- 7. PRODUCT TAGS
-- ============================================================

create table if not exists tags (
  id uuid primary key default uuid_generate_v4(),

  name text not null unique,
  slug text not null unique
);


create table if not exists product_tags (
  product_id uuid not null
    references products(id)
    on delete cascade,

  tag_id uuid not null
    references tags(id)
    on delete cascade,

  primary key (product_id, tag_id)
);


-- ============================================================
-- 8. ADDRESSES
-- ============================================================

create table if not exists addresses (
  id uuid primary key default uuid_generate_v4(),

  user_id uuid not null
    references auth.users(id)
    on delete cascade,

  first_name text,
  last_name text,

  phone text,

  address_line_1 text not null,
  address_line_2 text,

  city text not null,
  state text,

  postal_code text,

  country text not null default 'Pakistan',

  is_default boolean not null default false,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


-- ============================================================
-- 9. CARTS
-- ============================================================

create table if not exists carts (
  id uuid primary key default uuid_generate_v4(),

  user_id uuid references auth.users(id) on delete cascade,

  session_id text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create table if not exists cart_items (
  id uuid primary key default uuid_generate_v4(),

  cart_id uuid not null
    references carts(id)
    on delete cascade,

  product_id uuid not null
    references products(id)
    on delete cascade,

  variant_id uuid
    references product_variants(id)
    on delete set null,

  quantity integer not null default 1
    check (quantity > 0),

  unit_price numeric(12,2) not null,

  created_at timestamptz not null default now(),

  unique(cart_id, product_id, variant_id)
);


-- ============================================================
-- 10. WISHLIST
-- ============================================================

create table if not exists wishlists (
  id uuid primary key default uuid_generate_v4(),

  user_id uuid not null
    references auth.users(id)
    on delete cascade,

  product_id uuid not null
    references products(id)
    on delete cascade,

  created_at timestamptz not null default now(),

  unique(user_id, product_id)
);


-- ============================================================
-- 11. ORDERS
-- ============================================================

create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),

  user_id uuid references auth.users(id) on delete set null,

  order_number text not null unique,

  status order_status not null default 'pending',

  payment_status payment_status not null default 'pending',

  fulfillment_status fulfillment_status not null default 'unfulfilled',

  subtotal numeric(12,2) not null default 0,

  discount_amount numeric(12,2) not null default 0,

  shipping_amount numeric(12,2) not null default 0,

  tax_amount numeric(12,2) not null default 0,

  total_amount numeric(12,2) not null default 0,

  currency text not null default 'PKR',

  notes text,

  shipping_first_name text,
  shipping_last_name text,
  shipping_phone text,

  shipping_address_line_1 text,
  shipping_address_line_2 text,

  shipping_city text,
  shipping_state text,
  shipping_postal_code text,
  shipping_country text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


-- ============================================================
-- 12. ORDER ITEMS
-- ============================================================

create table if not exists order_items (
  id uuid primary key default uuid_generate_v4(),

  order_id uuid not null
    references orders(id)
    on delete cascade,

  product_id uuid
    references products(id)
    on delete set null,

  variant_id uuid
    references product_variants(id)
    on delete set null,

  product_name text not null,

  variant_name text,

  sku text,

  image_url text,

  quantity integer not null
    check (quantity > 0),

  unit_price numeric(12,2) not null,

  total_price numeric(12,2) not null,

  created_at timestamptz not null default now()
);


-- ============================================================
-- 13. PAYMENTS
-- ============================================================

create table if not exists payments (
  id uuid primary key default uuid_generate_v4(),

  order_id uuid not null
    references orders(id)
    on delete cascade,

  provider text,

  transaction_id text,

  amount numeric(12,2) not null,

  currency text not null default 'PKR',

  status payment_status not null default 'pending',

  paid_at timestamptz,

  created_at timestamptz not null default now()
);


-- ============================================================
-- 14. DISCOUNTS / COUPONS
-- ============================================================

create table if not exists discounts (
  id uuid primary key default uuid_generate_v4(),

  code text not null unique,

  type discount_type not null,

  value numeric(12,2) not null,

  minimum_order_amount numeric(12,2),

  maximum_discount_amount numeric(12,2),

  usage_limit integer,

  usage_count integer not null default 0,

  starts_at timestamptz,

  expires_at timestamptz,

  is_active boolean not null default true,

  created_at timestamptz not null default now()
);


-- ============================================================
-- 15. DISCOUNT PRODUCTS
-- ============================================================

create table if not exists discount_products (
  discount_id uuid not null
    references discounts(id)
    on delete cascade,

  product_id uuid not null
    references products(id)
    on delete cascade,

  primary key (discount_id, product_id)
);


-- ============================================================
-- 16. REVIEWS
-- ============================================================

create table if not exists reviews (
  id uuid primary key default uuid_generate_v4(),

  product_id uuid not null
    references products(id)
    on delete cascade,

  user_id uuid
    references auth.users(id)
    on delete set null,

  rating integer not null
    check (rating between 1 and 5),

  title text,

  review text,

  is_verified_purchase boolean not null default false,

  is_approved boolean not null default false,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


-- ============================================================
-- 17. NEWSLETTER
-- ============================================================

create table if not exists newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),

  email text not null unique,

  is_active boolean not null default true,

  subscribed_at timestamptz not null default now(),

  unsubscribed_at timestamptz
);


-- ============================================================
-- 18. CONTACT / INQUIRIES
-- ============================================================

create table if not exists contact_messages (
  id uuid primary key default uuid_generate_v4(),

  name text not null,

  email text not null,

  phone text,

  subject text,

  message text not null,

  is_read boolean not null default false,

  created_at timestamptz not null default now()
);


-- ============================================================
-- 19. COLLECTIONS
-- ============================================================

create table if not exists collections (
  id uuid primary key default uuid_generate_v4(),

  name text not null,

  slug text not null unique,

  description text,

  image_url text,

  is_active boolean not null default true,

  sort_order integer not null default 0,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create table if not exists collection_products (
  collection_id uuid not null
    references collections(id)
    on delete cascade,

  product_id uuid not null
    references products(id)
    on delete cascade,

  sort_order integer not null default 0,

  primary key (collection_id, product_id)
);


-- ============================================================
-- 20. PRODUCT OPTIONS
-- ============================================================

create table if not exists product_options (
  id uuid primary key default uuid_generate_v4(),

  product_id uuid not null
    references products(id)
    on delete cascade,

  name text not null,

  sort_order integer not null default 0
);


create table if not exists product_option_values (
  id uuid primary key default uuid_generate_v4(),

  option_id uuid not null
    references product_options(id)
    on delete cascade,

  value text not null,

  sort_order integer not null default 0
);


-- ============================================================
-- 21. INDEXES
-- ============================================================

create index if not exists idx_products_category
on products(category_id);

create index if not exists idx_products_status
on products(status);

create index if not exists idx_products_featured
on products(is_featured);

create index if not exists idx_products_new
on products(is_new);

create index if not exists idx_products_bestseller
on products(is_bestseller);

create index if not exists idx_product_images_product
on product_images(product_id);

create index if not exists idx_product_variants_product
on product_variants(product_id);

create index if not exists idx_cart_items_cart
on cart_items(cart_id);

create index if not exists idx_orders_user
on orders(user_id);

create index if not exists idx_orders_status
on orders(status);

create index if not exists idx_order_items_order
on order_items(order_id);

create index if not exists idx_reviews_product
on reviews(product_id);


-- ============================================================
-- 22. UPDATED_AT FUNCTION
-- ============================================================

create or replace function update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;


-- ============================================================
-- 23. UPDATED_AT TRIGGERS
-- ============================================================

drop trigger if exists products_updated_at on products;

create trigger products_updated_at
before update on products
for each row
execute function update_updated_at();


drop trigger if exists profiles_updated_at on profiles;

create trigger profiles_updated_at
before update on profiles
for each row
execute function update_updated_at();


drop trigger if exists categories_updated_at on categories;

create trigger categories_updated_at
before update on categories
for each row
execute function update_updated_at();


drop trigger if exists variants_updated_at on product_variants;

create trigger variants_updated_at
before update on product_variants
for each row
execute function update_updated_at();


drop trigger if exists orders_updated_at on orders;

create trigger orders_updated_at
before update on orders
for each row
execute function update_updated_at();


drop trigger if exists addresses_updated_at on addresses;

create trigger addresses_updated_at
before update on addresses
for each row
execute function update_updated_at();


drop trigger if exists carts_updated_at on carts;

create trigger carts_updated_at
before update on carts
for each row
execute function update_updated_at();


drop trigger if exists reviews_updated_at on reviews;

create trigger reviews_updated_at
before update on reviews
for each row
execute function update_updated_at();


-- ============================================================
-- 24. AUTO-GENERATE ORDER NUMBER
-- ============================================================

create or replace function generate_order_number()
returns trigger
language plpgsql
as $$
begin
  if new.order_number is null or new.order_number = '' then
    new.order_number :=
      'HOM-' ||
      to_char(now(), 'YYYYMMDD') ||
      '-' ||
      upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 8));
  end if;

  return new;
end;
$$;


drop trigger if exists orders_generate_number on orders;

create trigger orders_generate_number
before insert on orders
for each row
execute function generate_order_number();


-- ============================================================
-- 25. BASIC ROW LEVEL SECURITY
-- ============================================================

alter table profiles enable row level security;
alter table addresses enable row level security;
alter table carts enable row level security;
alter table cart_items enable row level security;
alter table wishlists enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table reviews enable row level security;
alter table newsletter_subscribers enable row level security;
alter table contact_messages enable row level security;


-- ============================================================
-- 26. PUBLIC PRODUCT ACCESS
-- ============================================================

alter table products enable row level security;
alter table categories enable row level security;
alter table product_images enable row level security;
alter table product_variants enable row level security;
alter table tags enable row level security;
alter table product_tags enable row level security;
alter table collections enable row level security;
alter table collection_products enable row level security;
alter table product_options enable row level security;
alter table product_option_values enable row level security;


create policy "Public can view active products"
on products
for select
using (status = 'active');


create policy "Public can view categories"
on categories
for select
using (is_active = true);


create policy "Public can view product images"
on product_images
for select
using (
  exists (
    select 1
    from products
    where products.id = product_images.product_id
    and products.status = 'active'
  )
);


create policy "Public can view product variants"
on product_variants
for select
using (
  exists (
    select 1
    from products
    where products.id = product_variants.product_id
    and products.status = 'active'
  )
);


create policy "Public can view collections"
on collections
for select
using (is_active = true);


create policy "Public can view collection products"
on collection_products
for select
using (
  exists (
    select 1
    from collections
    where collections.id = collection_products.collection_id
    and collections.is_active = true
  )
);


-- ============================================================
-- 27. USER PROFILE POLICY
-- ============================================================

create policy "Users can view own profile"
on profiles
for select
using (auth.uid() = id);


create policy "Users can update own profile"
on profiles
for update
using (auth.uid() = id);


-- ============================================================
-- 28. USER ADDRESS POLICY
-- ============================================================

create policy "Users can manage own addresses"
on addresses
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);


-- ============================================================
-- 29. CART POLICIES
-- ============================================================

create policy "Users can manage own carts"
on carts
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);


create policy "Users can manage own cart items"
on cart_items
for all
using (
  exists (
    select 1
    from carts
    where carts.id = cart_items.cart_id
    and carts.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from carts
    where carts.id = cart_items.cart_id
    and carts.user_id = auth.uid()
  )
);


-- ============================================================
-- 30. WISHLIST POLICIES
-- ============================================================

create policy "Users can manage own wishlist"
on wishlists
for all
using (auth.uid() = user_id)
with check (auth.uid() = user_id);


-- ============================================================
-- 31. ORDER POLICIES
-- ============================================================

create policy "Users can view own orders"
on orders
for select
using (auth.uid() = user_id);


create policy "Users can view own order items"
on order_items
for select
using (
  exists (
    select 1
    from orders
    where orders.id = order_items.order_id
    and orders.user_id = auth.uid()
  )
);


-- ============================================================
-- 32. REVIEW POLICIES
-- ============================================================

create policy "Anyone can view approved reviews"
on reviews
for select
using (is_approved = true);


create policy "Users can create own reviews"
on reviews
for insert
with check (auth.uid() = user_id);


-- ============================================================
-- 33. NEWSLETTER INSERT
-- ============================================================

create policy "Anyone can subscribe"
on newsletter_subscribers
for insert
with check (true);


-- ============================================================
-- 34. SEED CATEGORIES
-- ============================================================

insert into categories (name, slug, description, sort_order)
values
  (
    'Shalwar Kameez',
    'shalwar-kameez',
    'Refined traditional Pakistani menswear.',
    1
  ),
  (
    'Irish Linen',
    'shirts',
    'Premium linen shirts for effortless tailoring.',
    2
  ),
  (
    'Tailored Pants',
    'pants',
    'Contemporary tailored trousers.',
    3
  ),
  (
    'Matching Sets',
    'matching-sets',
    'Coordinated menswear sets.',
    4
  ),
  (
    'Chappal',
    'chappal',
    'Traditional handcrafted footwear.',
    5
  ),
  (
    'Trucker Caps',
    'caps',
    'Premium trucker caps.',
    6
  ),
  (
    'Gadgets',
    'gadgets',
    'Lifestyle accessories and gadgets.',
    7
  )
on conflict (slug) do nothing;


-- ============================================================
-- 35. USEFUL PRODUCT VIEW
-- ============================================================

create or replace view product_catalog as
select
  p.id,
  p.name,
  p.slug,
  p.description,
  p.short_description,
  p.base_price,
  p.compare_at_price,
  p.currency,
  p.stock_quantity,
  p.is_featured,
  p.is_new,
  p.is_bestseller,
  p.status,

  c.name as category_name,
  c.slug as category_slug,

  (
    select pi.image_url
    from product_images pi
    where pi.product_id = p.id
    order by pi.is_primary desc, pi.sort_order asc
    limit 1
  ) as primary_image,

  (
    select coalesce(
      json_agg(
        json_build_object(
          'id', pi.id,
          'url', pi.image_url,
          'alt', pi.alt_text,
          'sort_order', pi.sort_order
        )
        order by pi.sort_order
      ),
      '[]'::json
    )
    from product_images pi
    where pi.product_id = p.id
  ) as images,

  (
    select coalesce(
      json_agg(
        json_build_object(
          'id', pv.id,
          'sku', pv.sku,
          'size', pv.size,
          'color', pv.color,
          'price', pv.price,
          'stock_quantity', pv.stock_quantity
        )
        order by pv.id
      ),
      '[]'::json
    )
    from product_variants pv
    where pv.product_id = p.id
    and pv.is_active = true
  ) as variants

from products p

left join categories c
  on c.id = p.category_id

where p.status = 'active';


-- ============================================================
-- END HOUSE OF MELONE DATABASE
-- ============================================================
