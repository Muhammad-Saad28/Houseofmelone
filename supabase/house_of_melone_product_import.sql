-- ============================================================
-- HOUSE OF MELONE PRODUCT IMPORT
-- Generated from all_products_houseofmelone.com.csv
-- Target: Supabase / PostgreSQL schema supplied by the user
--
-- Imports:
--   categories
--   products
--   product_images
--   product_variants
--   tags / product_tags
--   product_options / product_option_values
--
-- Safe to re-run for the same product slugs.
-- ============================================================

begin;

-- 1. Ensure all categories used by the CSV exist
insert into categories (name, slug, description, sort_order)
values
  ('Shalwar Kameez', 'shalwar-kameez', 'Refined traditional Pakistani menswear.', 1),
  ('Irish Linen', 'shirts', 'Premium linen shirts for effortless tailoring.', 2),
  ('Tailored Pants', 'pants', 'Contemporary tailored trousers.', 3),
  ('Matching Sets', 'matching-sets', 'Coordinated menswear sets.', 4),
  ('Charsadda Chappal', 'chappal', 'Traditional handcrafted footwear.', 5),
  ('Trucker Caps', 'caps', 'Casual everyday caps.', 6),
  ('Gadgets', 'gadgets', 'Useful tech and lifestyle gadgets.', 7)
on conflict (slug) do update
set name = excluded.name,
    description = excluded.description,
    sort_order = excluded.sort_order;

-- 2. Upsert products

insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shirts'),
  'White Irish Linen Shirt',
  'irish-lenin-shirt',
  '<p data-end="647" data-start="247">Tailored from <strong data-end="283" data-start="261">100% premium linen</strong>. The <strong data-end="377" data-start="354">relaxed-fit shirt</strong> features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease.</p>
<p data-end="795" data-start="649">A modern take on the <strong data-end="690" data-start="670">men’s fashion</strong>, this <strong data-end="727" data-start="697">linen shirt for men</strong> offers timeless style and breathable comfort.</p>
<p data-end="865" data-start="797">Your order will be reserved upon receipt of a 50% advance payment.</p>
<p data-end="920" data-start="867"><strong data-end="877" data-start="867">Color:</strong> White<br data-end="896" data-start="893"><strong data-end="907" data-start="896">Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen . The relaxed-fit shirt features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease. A modern take on the men’s fashion , this linen shirt for men offers timeless style and breathable comfort. Your order will be re...',
  'HOM-IRISH_LENIN_SHIRT',
  'Acme',
  'active'::product_status,
  10000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shirts'),
  'Orange Irish Linen Shirt',
  'orange-irish-lenin-shirt',
  '<p data-end="647" data-start="247">Tailored from <strong data-end="283" data-start="261">100% premium linen</strong>. The <strong data-end="377" data-start="354">relaxed-fit shirt</strong> features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease.</p>
<p data-end="795" data-start="649">A modern take on the <strong data-end="690" data-start="670">men’s fashion</strong>, this <strong data-end="727" data-start="697">linen shirt for men</strong> offers timeless style and breathable comfort.</p>
<p data-end="865" data-start="797">Your order will be reserved upon receipt of a 50% advance payment.</p>
<p data-end="920" data-start="867"><strong data-end="877" data-start="867">Color:</strong> Orange<br data-end="896" data-start="893"><strong data-end="907" data-start="896">Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen . The relaxed-fit shirt features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease. A modern take on the men’s fashion , this linen shirt for men offers timeless style and breathable comfort. Your order will be re...',
  'HOM-ORANGE_IRISH_LENIN_SHIRT',
  'Melone',
  'active'::product_status,
  10000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shirts'),
  'Pink Irish Linen Shirt',
  'pink-irish-lenin-shirt',
  '<p data-start="649" data-end="795"> </p>
<p data-start="797" data-end="865"><meta charset="utf-8"></p>
<p data-start="867" data-end="920"><meta charset="utf-8"><a data-encoded-tag-name="meta" data-encoded-tag-value="" data-encoded-attr-charset="dXRmLTg="><br data-start="893" data-end="896"><strong data-start="896" data-end="907">Fabric:</strong> 100% Irish Linen</a></p>',
  'Fabric: 100% Irish Linen',
  'HOM-PINK_IRISH_LENIN_SHIRT',
  'Melone',
  'active'::product_status,
  10000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'matching-sets'),
  'Brown Irish Linen Shacket Set',
  'brown-irish-lenin-shacket-set',
  '<p data-end="647" data-start="247">Tailored from <strong data-end="283" data-start="261">100% premium linen</strong>, this co-ord set combines refined design with effortless comfort. The <strong data-end="377" data-start="354">relaxed-fit shacket</strong> features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease. Paired with <strong data-end="537" data-start="510">tailored linen trousers</strong>, it creates a versatile silhouette—perfect for both formal wear and elevated evenings.</p>
<p data-end="795" data-start="649">A modern take on the <strong data-end="690" data-start="670">men’s co-ord set</strong>, this <strong data-end="727" data-start="697">linen matching set for men</strong> offers timeless style, breathable comfort, and seasonless appeal.</p>
<p data-end="865" data-start="797">Your order will be reserved upon receipt of a 50% advance payment.</p>
<p data-end="920" data-start="867"><strong data-end="877" data-start="867">Color:</strong> Brown<br data-end="896" data-start="893"><strong data-end="907" data-start="896">Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen , this co-ord set combines refined design with effortless comfort. The relaxed-fit shacket features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease. Paired with tailored linen trousers , it creates a versatile s...',
  'HOM-BROWN_IRISH_LENIN_SHACKET_SET',
  'House of Melone',
  'active'::product_status,
  25000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'matching-sets'),
  'Red Wine Maroon Irish Linen Shacket Set',
  'red-wine-maroon-irish-lenin-shacket-set',
  '<p data-end="647" data-start="247">Tailored from <strong data-end="283" data-start="261">100% premium linen</strong>, this co-ord set combines refined design with effortless comfort. The <strong data-end="377" data-start="354">relaxed-fit shacket</strong> features a clean button-down front, full sleeves with cuffss, and a lightweight structure that moves with ease. Paired with <strong data-end="537" data-start="510">tailored linen trousers</strong>, it creates a versatile silhouette—perfect for both formal wear and elevated evenings.</p>
<p data-end="795" data-start="649">A modern take on the <strong data-end="690" data-start="670">men’s co-ord set</strong>, this <strong data-end="727" data-start="697">linen matching set for men</strong> offers timeless style, breathable comfort, and seasonless appeal.</p>
<p data-end="865" data-start="797">Your order will be reserved upon receipt of a 50% advance payment.</p>
<p data-end="920" data-start="867"><strong data-end="877" data-start="867">Color:</strong> Red Wine Maroon<br data-end="896" data-start="893"><strong data-end="907" data-start="896">Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen , this co-ord set combines refined design with effortless comfort. The relaxed-fit shacket features a clean button-down front, full sleeves with cuffss, and a lightweight structure that moves with ease. Paired with tailored linen trousers , it creates a versatile ...',
  'HOM-RED_WINE_MAROON_IRISH_LENIN_SHACKET_SET',
  'House of Melone',
  'active'::product_status,
  25000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'matching-sets'),
  'Black Irish Linen Shacket Set',
  'black-irish-lenin-shacket-set',
  '<p data-start="247" data-end="647">Tailored from <strong data-start="261" data-end="283">100% premium linen</strong>, this co-ord set combines refined design with effortless comfort. The <strong data-start="354" data-end="377">relaxed-fit shacket</strong> features a clean Jacket style front, half sleeves and a lightweight structure that moves with ease. Paired with <strong data-start="510" data-end="537">tailored linen trousers</strong>, it creates a versatile silhouette—perfect for both formal wear and elevated evenings.</p>
<p data-start="649" data-end="795">A modern take on the <strong data-start="670" data-end="690">men’s co-ord set</strong>, this <strong data-start="697" data-end="727">linen matching set for men</strong> offers timeless style, breathable comfort, and seasonless appeal.</p>
<p data-start="797" data-end="865">Your order will be reserved upon receipt of a 50% advance payment.</p>
<p data-start="867" data-end="920"><strong data-start="867" data-end="877">Color:</strong> Black<br data-start="893" data-end="896"><strong data-start="896" data-end="907">Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen , this co-ord set combines refined design with effortless comfort. The relaxed-fit shacket features a clean Jacket style front, half sleeves and a lightweight structure that moves with ease. Paired with tailored linen trousers , it creates a versatile silhouette—p...',
  'HOM-BLACK_IRISH_LENIN_SHACKET_SET',
  'House of Melone',
  'active'::product_status,
  25000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'matching-sets'),
  'Army Green Irish Linen Shacket Set',
  'army-green-irish-lenin-shacket-set',
  '<p data-end="647" data-start="247">Tailored from <strong data-end="283" data-start="261">100% premium linen</strong>, this co-ord set combines refined design with effortless comfort. The <strong data-end="377" data-start="354">relaxed-fit shacket</strong> features a clean button-down front, long sleeves with buttoned cuffs, and a lightweight structure that moves with ease. Paired with <strong data-end="537" data-start="510">tailored linen trousers</strong>, it creates a versatile silhouette—perfect for both formal wear and elevated evenings.</p>
<p data-end="795" data-start="649">A modern take on the <strong data-end="690" data-start="670">men’s co-ord set</strong>, this <strong data-end="727" data-start="697">linen matching set for men</strong> offers timeless style, breathable comfort, and seasonless appeal.</p>
<p data-end="865" data-start="797">Your order will be reserved upon receipt of a 50% advance payment.</p>
<p data-end="920" data-start="867"><strong data-end="877" data-start="867">Color:</strong> Army Green<br data-end="896" data-start="893"><strong data-end="907" data-start="896">Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen , this co-ord set combines refined design with effortless comfort. The relaxed-fit shacket features a clean button-down front, long sleeves with buttoned cuffs, and a lightweight structure that moves with ease. Paired with tailored linen trousers , it creates a ve...',
  'HOM-ARMY_GREEN_IRISH_LENIN_SHACKET_SET',
  'House of Melone',
  'active'::product_status,
  25000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'matching-sets'),
  'Navy Blue Irish Linen Shacket Set',
  'navy-blue-irish-lenin-shacket-set',
  '<p data-start="247" data-end="647">Tailored from <strong data-start="261" data-end="283">100% premium linen</strong>, this co-ord set combines refined design with effortless comfort. The <strong data-start="354" data-end="377">relaxed-fit shacket</strong> features a clean zip-down front, long sleeves with buttoned cuffs, and a lightweight structure that moves with ease. Paired with <strong data-start="510" data-end="537">tailored linen trousers</strong>, it creates a versatile silhouette—perfect for both formal wear and elevated evenings.</p>
<p data-start="649" data-end="795">A modern take on the <strong data-start="670" data-end="690">men’s co-ord set</strong>, this <strong data-start="697" data-end="727">linen matching set for men</strong> offers timeless style, breathable comfort, and seasonless appeal.</p>
<p data-start="797" data-end="865">Your order will be reserved upon receipt of a 50% advance payment.</p>
<p data-start="867" data-end="920"><strong data-start="867" data-end="877">Color:</strong> Navy Blue<br data-start="893" data-end="896"><strong data-start="896" data-end="907">Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen , this co-ord set combines refined design with effortless comfort. The relaxed-fit shacket features a clean zip-down front, long sleeves with buttoned cuffs, and a lightweight structure that moves with ease. Paired with tailored linen trousers , it creates a versa...',
  'HOM-NAVY_BLUE_IRISH_LENIN_SHACKET_SET',
  'House of Melone',
  'active'::product_status,
  25000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shirts'),
  'Off White Irish Linen Shirt',
  'off-white-irish-lenin-shirt',
  '<p data-end="647" data-start="247">Tailored from <strong data-end="283" data-start="261">100% premium linen</strong>. The <strong data-end="377" data-start="354">relaxed-fit shirt</strong> features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease.</p>
<p data-end="795" data-start="649">A modern take on the <strong data-end="690" data-start="670">men’s fashion</strong>, this <strong data-end="727" data-start="697">linen shirt for men</strong> offers timeless style and breathable comfort.</p>
<p data-start="797" data-end="865"><meta charset="utf-8"></p>
<p data-start="867" data-end="920"><meta charset="utf-8"><a data-encoded-tag-name="meta" data-encoded-tag-value="" data-encoded-attr-charset="dXRmLTg="></a><a data-encoded-tag-name="meta" data-encoded-tag-value="" data-encoded-attr-charset="dXRmLTg="><span>Off </span>White<br data-start="893" data-end="896"><strong data-start="896" data-end="907">Fabric:</strong> 100% Irish Linen</a></p>',
  'Tailored from 100% premium linen . The relaxed-fit shirt features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease. A modern take on the men’s fashion , this linen shirt for men offers timeless style and breathable comfort. Off White Fabric: 100...',
  'HOM-OFF_WHITE_IRISH_LENIN_SHIRT',
  'House of Melone',
  'active'::product_status,
  10000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'caps'),
  'Black Basic Tucker Cap',
  'black-basic-tucker-hat',
  '<p>Black Basic Tucker Cap</p>',
  'Black Basic Tucker Cap',
  'HOM-BLACK_BASIC_TUCKER_HAT',
  'Melone',
  'active'::product_status,
  1500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'caps'),
  'Blue Basic Tucker Cap',
  'blue-basic-tucker-hat',
  '<p>Blue Basic Tucker Cap</p>',
  'Blue Basic Tucker Cap',
  'HOM-BLUE_BASIC_TUCKER_HAT',
  'Melone',
  'active'::product_status,
  1500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'caps'),
  'Grey Basic Tucker Cap',
  'grey-basic-tucker-hat',
  '<p>Grey Basic Tucker Cap</p>',
  'Grey Basic Tucker Cap',
  'HOM-GREY_BASIC_TUCKER_HAT',
  'Melone',
  'active'::product_status,
  1500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'chappal'),
  'Black Leather Charsadda Panjedar Chappal',
  'black-charsadda-panjedar-chappal',
  '<p>Charsadda Panjedar Chappal is a traditional handmade footwear style that originated from Charsadda, a historic city near Peshawar in Khyber Pakhtunkhwa, Pakistan. It''s a proud symbol of Pashtun craftsmanship and is often  worn at weddings, Eid, and  cultural gatherings.</p>
<p>Material: Leather</p>',
  'Charsadda Panjedar Chappal is a traditional handmade footwear style that originated from Charsadda, a historic city near Peshawar in Khyber Pakhtunkhwa, Pakistan. It''s a proud symbol of Pashtun craftsmanship and is often  worn at weddings, Eid, and  cultural gatherings. Material: Leather',
  'HOM-BLACK_CHARSADDA_PANJEDAR_CHAPPAL',
  'Melone',
  'active'::product_status,
  4500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'chappal'),
  'Brown Leather Charsadda Panjedar Chappal',
  'brown-charsadda-panjedar-chappal',
  '<p>Charsadda Panjedar Chappal is a traditional handmade footwear style that originated from Charsadda, a historic city near Peshawar in Khyber Pakhtunkhwa, Pakistan. It''s a proud symbol of Pashtun craftsmanship and is often  worn at weddings, Eid, and  cultural gatherings.</p>
<p>Material: Leather</p>',
  'Charsadda Panjedar Chappal is a traditional handmade footwear style that originated from Charsadda, a historic city near Peshawar in Khyber Pakhtunkhwa, Pakistan. It''s a proud symbol of Pashtun craftsmanship and is often  worn at weddings, Eid, and  cultural gatherings. Material: Leather',
  'HOM-BROWN_CHARSADDA_PANJEDAR_CHAPPAL',
  'Melone',
  'active'::product_status,
  4500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'chappal'),
  'Beige Suede Leather Charsadda Panjedar Chappal',
  'beige-charsadda-panjedar-chappal',
  '<p><meta charset="utf-8"><span>Charsadda Panjedar Chappal is a traditional handmade footwear style that originated from Charsadda, a historic city near Peshawar in Khyber Pakhtunkhwa, Pakistan. It''s a proud symbol of Pashtun craftsmanship and is often  worn at weddings, Eid, and  cultural gatherings.</span><span></span></p>
<p><span>Material: Suede Leather</span></p>',
  'Charsadda Panjedar Chappal is a traditional handmade footwear style that originated from Charsadda, a historic city near Peshawar in Khyber Pakhtunkhwa, Pakistan. It''s a proud symbol of Pashtun craftsmanship and is often  worn at weddings, Eid, and  cultural gatherings. Material: Suede Leather',
  'HOM-BEIGE_CHARSADDA_PANJEDAR_CHAPPAL',
  'Melone',
  'active'::product_status,
  4500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shalwar-kameez'),
  'Blue Shalwar Kameez',
  'blue-shalwar-kameez',
  '<div>Italian Wash &amp; Wear – Now in Our Shalwar Kameez!</div>
<div><span> • Strong &amp; Durable Yarn: Long-lasting &amp; high-quality </span></div>
<div><span> • Rich, Fade-Resistant Colors: Vibrant even after multiple washes</span></div>
<div><span> • Soft &amp; Lightweight: Comfortable for all seasons</span></div>
<div><span> • Effortless Style: Perfect for any occasion</span></div>
<div><br></div>
<div>Experience comfort, style, and luxury in every stitch.</div>',
  'Italian Wash & Wear – Now in Our Shalwar Kameez! • Strong & Durable Yarn: Long-lasting & high-quality • Rich, Fade-Resistant Colors: Vibrant even after multiple washes • Soft & Lightweight: Comfortable for all seasons • Effortless Style: Perfect for any occasion Experience comfort, style, and lux...',
  'HOM-BLUE_SHALWAR_KAMEEZ',
  'Melone',
  'active'::product_status,
  15000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shalwar-kameez'),
  'Black Shalwar Kameez',
  'black-shalwar-kameez',
  '<div>
<meta charset="utf-8">Tailored from <strong>Italian Wash &amp; Wear</strong> – Now in Our Shalwar Kameez!</div>
<div><span> • Strong &amp; Durable Yarn: Long-lasting &amp; high-quality </span></div>
<div><span> • Rich, Fade-Resistant Colors: Vibrant even after multiple washes </span></div>
<div><span> • Soft &amp; Lightweight: Comfortable for all seasons </span></div>
<div><span> • Effortless Style: Perfect for any occasion </span></div>
<div><br></div>
<div>Experience comfort, style, and luxury in every stitch.</div>',
  'Tailored from Italian Wash & Wear – Now in Our Shalwar Kameez! • Strong & Durable Yarn: Long-lasting & high-quality • Rich, Fade-Resistant Colors: Vibrant even after multiple washes • Soft & Lightweight: Comfortable for all seasons • Effortless Style: Perfect for any occasion Experience comfort, ...',
  'HOM-BLACK_SHALWAR_KAMEEZ',
  'Melone',
  'active'::product_status,
  15000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shalwar-kameez'),
  'White Shalwar Kameez',
  'off-white-shalwar-kameez',
  '<div>Tailored from <strong>Italian Wash &amp; Wear</strong> – Now in Our Shalwar Kameez!</div>
<div><span> • Strong &amp; Durable Yarn: Long-lasting &amp; high-quality </span></div>
<div><span> • Rich, Fade-Resistant Colors: Vibrant even after multiple washes </span></div>
<div><span> • Soft &amp; Lightweight: Comfortable for all seasons </span></div>
<div><span> • Effortless Style: Perfect for any occasion </span></div>
<div><br></div>
<div>Experience comfort, style, and luxury in every stitch.</div>',
  'Tailored from Italian Wash & Wear – Now in Our Shalwar Kameez! • Strong & Durable Yarn: Long-lasting & high-quality • Rich, Fade-Resistant Colors: Vibrant even after multiple washes • Soft & Lightweight: Comfortable for all seasons • Effortless Style: Perfect for any occasion Experience comfort, ...',
  'HOM-OFF_WHITE_SHALWAR_KAMEEZ',
  'Melone',
  'active'::product_status,
  15000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shalwar-kameez'),
  'Brown Shalwar Kameez',
  'brown-shalwar-kameez',
  '<div>Tailored from <strong>Italian Wash &amp; Wear</strong> – Now in Our Shalwar Kameez!</div>
<div><span> • Strong &amp; Durable Yarn: Long-lasting &amp; high-quality </span></div>
<div><span> • Rich, Fade-Resistant Colors: Vibrant even after multiple washes </span></div>
<div><span> • Soft &amp; Lightweight: Comfortable for all seasons </span></div>
<div><span> • Effortless Style: Perfect for any occasion </span></div>
<div><br></div>
<div>Experience comfort, style, and luxury in every stitch.</div>',
  'Tailored from Italian Wash & Wear – Now in Our Shalwar Kameez! • Strong & Durable Yarn: Long-lasting & high-quality • Rich, Fade-Resistant Colors: Vibrant even after multiple washes • Soft & Lightweight: Comfortable for all seasons • Effortless Style: Perfect for any occasion Experience comfort, ...',
  'HOM-BROWN_SHALWAR_KAMEEZ',
  'Melone',
  'active'::product_status,
  15000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'gadgets'),
  'Tripod Selfie Stick White',
  'tripod-selfie-stick-white',
  '<p>Phone Selfie Stick Tripod,Smartphone Tripod Stand All-in-1 with Integrated Wireless Remote,Portable,Lightweight,Extendable Phone Tripod for iPhone/Android(White)</p>
<h3>Features:<meta charset="utf-8">
</h3>
<p><span class="a-list-item">All in 1 Travel Tripod: The phone holder is a perfect combination of a selfie stick and a tripod. It has a fully telescopic handle and built-in foldable legs. When press the button at the bottom of the phone tripod, the three legs will open and can be used as a stand tripod. After adjusting the height of the telescopic pole, it can double as a desktop tripod. The multi-function tripod for phone is very suitable for taking pictures,Face time etc</span></p>
<p><span class="a-list-item">67" Telescopic Pole: The telescopic Pole is made of aluminum alloy,so the phone tripod stand is not only lightweight but also corrosion-resistant, sturdy. The adjustable height of the cell phone tripod is 11.4~67 inches (completely folded 11.4 inches, adjusted in 10 stections), allowing you to shoot various heights that other phone tripod mount cannot shoot, capturing a wider field of view, and satisfying your needs in different occasions</span></p>
<p><span class="a-list-item">Reinforced Tripod Base: Very easy to use, just press the button on the bottom to unlock three legs of the tripod for iphone. The base of the newly upgraded cellphone tripod adopts a reinforced design with a silicone non-slip foot pad, which is more stable after unfolding and is not easy to shake. Note: In the tripod mode, the phone must be placed in the center of the sliding track, which is consistent with the center of gravity of the tripod to avoid tipping</span></p>
<p><span class="a-list-item">Chargeable Remote Shutter: The tripod for phone has a built-in rechargeable wireless remote control,supports shooting within 10m,is compatible with iphone/Android,quickly realizes pairing, and the operation is very simple.When the remote control is not in use,it can be put into the special remote control slot on the handle of the selfie stick for iphone to prevent it from being lost.The mount range of the tripod phone holder is about 2.28-3.46inch in size, which is suitable for 4-7'''' phones</span></p>
<p><span class="a-list-item">Portable &amp; Rotation: Having a compact design and can be carried around without taking up space. The phone tripod with remote can rotate the phone screen horizontally and vertically , and the angle can be easily adjusted. Aluminum alloy phone clip can support up and down 180 ° rotation to go overhead shooting, and left and right rotation to adjust the angle.In the selfie stick with remote mode, you can also slide the phone mount left and right, which is very flexible and convenient.</span></p>',
  'Phone Selfie Stick Tripod,Smartphone Tripod Stand All-in-1 with Integrated Wireless Remote,Portable,Lightweight,Extendable Phone Tripod for iPhone/Android(White) Features: All in 1 Travel Tripod: The phone holder is a perfect combination of a selfie stick and a tripod. It has a fully telescopic h...',
  'HOM-TRIPOD_SELFIE_STICK_WHITE',
  'House of Melone',
  'active'::product_status,
  10000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'pants'),
  'Blue Pants',
  'blue-pants',
  '<p>Relaxed fit trousers made from a flowing Italian fabric. High waistband with front pleats. Front pockets and rear patch pockets. Front zip fly and top button fastening.</p>
<p> </p>
<p><meta charset="utf-8">Experience comfort, style, and luxury in every stitch.</p>',
  'Relaxed fit trousers made from a flowing Italian fabric. High waistband with front pleats. Front pockets and rear patch pockets. Front zip fly and top button fastening. Experience comfort, style, and luxury in every stitch.',
  'HOM-BLUE_PANTS',
  'Melone',
  'active'::product_status,
  7000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  true,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'pants'),
  'Brown Pants',
  'brown-pants',
  '<p>Relaxed fit trousers made from a flowing Italian fabric. High waistband with front pleats. Front pockets and rear patch pockets. Front zip fly and top button fastening.</p>
<p> </p>
<p><meta charset="utf-8">Experience comfort, style, and luxury in every stitch.</p>',
  'Relaxed fit trousers made from a flowing Italian fabric. High waistband with front pleats. Front pockets and rear patch pockets. Front zip fly and top button fastening. Experience comfort, style, and luxury in every stitch.',
  'HOM-BROWN_PANTS',
  'Melone',
  'active'::product_status,
  7000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  true,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'pants'),
  'Black Pants',
  'black-pants',
  '<p>Relaxed fit trousers made from a flowing Italian fabric. High waistband with front pleats. Front pockets and rear patch pockets. Front zip fly and top button fastening.</p>
<p> </p>
<p><meta charset="utf-8">Experience comfort, style, and luxury in every stitch.</p>',
  'Relaxed fit trousers made from a flowing Italian fabric. High waistband with front pleats. Front pockets and rear patch pockets. Front zip fly and top button fastening. Experience comfort, style, and luxury in every stitch.',
  'HOM-BLACK_PANTS',
  'Melone',
  'active'::product_status,
  7000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  true,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'pants'),
  'Blue Stripe Pants',
  'blue-stripe-pants',
  '<div class="product-detail-description product-detail-info__description">
<div class="expandable-text">
<div class="expandable-text__content">
<div class="expandable-text__inner-content">
<p>Relaxed fit trousers made from a flowing Italian fabric. High waistband with front pleats. Front pockets and rear patch pockets. Front zip fly and top button fastening.</p>
<p> </p>
<p><meta charset="utf-8">Experience comfort, style, and luxury in every stitch.<meta charset="utf-8"></p>
<div class="product-detail-description product-detail-info__description">
<div class="expandable-text">
<div class="expandable-text__content">
<div class="expandable-text__inner-content"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>',
  'Relaxed fit trousers made from a flowing Italian fabric. High waistband with front pleats. Front pockets and rear patch pockets. Front zip fly and top button fastening. Experience comfort, style, and luxury in every stitch.',
  'HOM-BLUE_STRIPE_PANTS',
  'Melone',
  'active'::product_status,
  7000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  true,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shalwar-kameez'),
  'Charcoal Grey Shalwar Kameez',
  'charcoal-grey-shalwar-kameez',
  '<div>Tailored from <strong>Italian Wash &amp; Wear</strong> – Now in Our Shalwar Kameez!</div>
<div><span> • Strong &amp; Durable Yarn: Long-lasting &amp; high-quality </span></div>
<div><span> • Rich, Fade-Resistant Colors: Vibrant even after multiple washes </span></div>
<div><span> • Soft &amp; Lightweight: Comfortable for all seasons </span></div>
<div><span> • Effortless Style: Perfect for any occasion </span></div>
<div><br></div>
<div>Experience comfort, style, and luxury in every stitch.</div>',
  'Tailored from Italian Wash & Wear – Now in Our Shalwar Kameez! • Strong & Durable Yarn: Long-lasting & high-quality • Rich, Fade-Resistant Colors: Vibrant even after multiple washes • Soft & Lightweight: Comfortable for all seasons • Effortless Style: Perfect for any occasion Experience comfort, ...',
  'HOM-CHARCOAL_GREY_SHALWAR_KAMEEZ',
  'Melone',
  'active'::product_status,
  15000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shalwar-kameez'),
  'Olive Green Shalwar Kameez',
  'olive-green-shalwar-kameez',
  '<div>Tailored from <strong>Italian Wash &amp; Wear</strong> – Now in Our Shalwar Kameez!</div>
<div><span> • Strong &amp; Durable Yarn: Long-lasting &amp; high-quality </span></div>
<div><span> • Rich, Fade-Resistant Colors: Vibrant even after multiple washes </span></div>
<div><span> • Soft &amp; Lightweight: Comfortable for all seasons </span></div>
<div><span> • Effortless Style: Perfect for any occasion </span></div>
<div><br></div>
<div>Experience comfort, style, and luxury in every stitch.</div>',
  'Tailored from Italian Wash & Wear – Now in Our Shalwar Kameez! • Strong & Durable Yarn: Long-lasting & high-quality • Rich, Fade-Resistant Colors: Vibrant even after multiple washes • Soft & Lightweight: Comfortable for all seasons • Effortless Style: Perfect for any occasion Experience comfort, ...',
  'HOM-OLIVE_GREEN_SHALWAR_KAMEEZ',
  'Melone',
  'active'::product_status,
  15000.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shirts'),
  'Green Irish Linen',
  'green-irish-linen',
  '<p>Tailored from <strong>100% premium linen</strong>. The <strong>relaxed-fit shirt</strong> features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease.</p>
<p>A modern take on the <strong>men’s fashion</strong>, this <strong>linen shirt for men</strong> offers timeless style and breathable comfort.</p>
<p>Your order will be reserved upon receipt of a 50% advance payment.</p>
<p><strong>Color:</strong> Green<br><strong>Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen . The relaxed-fit shirt features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease. A modern take on the men’s fashion , this linen shirt for men offers timeless style and breathable comfort. Your order will be re...',
  'HOM-GREEN_IRISH_LINEN',
  'Melone',
  'active'::product_status,
  8500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shirts'),
  'Blue Irish Linen',
  'blue-irish-linen',
  '<p>Tailored from <strong>100% premium linen</strong>. The <strong>relaxed-fit shirt</strong> features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease.</p>
<p>A modern take on the <strong>men’s fashion</strong>, this <strong>linen shirt for men</strong> offers timeless style and breathable comfort.</p>
<p>Your order will be reserved upon receipt of a 50% advance payment.</p>
<p><strong>Color:</strong> Blue<br><strong>Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen . The relaxed-fit shirt features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease. A modern take on the men’s fashion , this linen shirt for men offers timeless style and breathable comfort. Your order will be re...',
  'HOM-BLUE_IRISH_LINEN',
  'Melone',
  'active'::product_status,
  8500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shirts'),
  'Pink Irish Linen',
  'pink-irish-linen',
  '<p>Tailored from <strong>100% premium linen</strong>. The <strong>relaxed-fit shirt</strong> features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease.</p>
<p>A modern take on the <strong>men’s fashion</strong>, this <strong>linen shirt for men</strong> offers timeless style and breathable comfort.</p>
<p>Your order will be reserved upon receipt of a 50% advance payment.</p>
<p><strong>Color:</strong> Pink<br><strong>Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen . The relaxed-fit shirt features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease. A modern take on the men’s fashion , this linen shirt for men offers timeless style and breathable comfort. Your order will be re...',
  'HOM-PINK_IRISH_LINEN',
  'Melone',
  'active'::product_status,
  8500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


insert into products (
  category_id, name, slug, description, short_description, sku, brand,
  status, base_price, compare_at_price, cost_price, currency,
  stock_quantity, low_stock_threshold, is_featured, is_new, is_bestseller
) values (
  (select id from categories where slug = 'shirts'),
  'White Irish Linen',
  'white-irish-linen',
  '<p>Tailored from <strong>100% premium linen</strong>. The <strong>relaxed-fit shirt</strong> features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease.</p>
<p>A modern take on the <strong>men’s fashion</strong>, this <strong>linen shirt for men</strong> offers timeless style and breathable comfort.</p>
<p>Your order will be reserved upon receipt of a 50% advance payment.</p>
<p><strong>Color:</strong> Off White<br><strong>Fabric:</strong> 100% Irish Linen</p>',
  'Tailored from 100% premium linen . The relaxed-fit shirt features a clean button-down front, full sleeves with cuffs, and a lightweight structure that moves with ease. A modern take on the men’s fashion , this linen shirt for men offers timeless style and breathable comfort. Your order will be re...',
  'HOM-WHITE_IRISH_LINEN',
  'Melone',
  'active'::product_status,
  8500.00,
  NULL,
  NULL,
  'PKR',
  0,
  5,
  false,
  false,
  false
)
on conflict (slug) do update set
  category_id = excluded.category_id,
  name = excluded.name,
  description = excluded.description,
  short_description = excluded.short_description,
  sku = excluded.sku,
  brand = excluded.brand,
  status = excluded.status,
  base_price = excluded.base_price,
  compare_at_price = excluded.compare_at_price,
  cost_price = excluded.cost_price,
  currency = excluded.currency,
  stock_quantity = excluded.stock_quantity,
  is_new = excluded.is_new,
  updated_at = now();


-- 3. Rebuild child records for the imported products
delete from product_tags
where product_id in (select id from products where slug in ('irish-lenin-shirt', 'orange-irish-lenin-shirt', 'pink-irish-lenin-shirt', 'brown-irish-lenin-shacket-set', 'red-wine-maroon-irish-lenin-shacket-set', 'black-irish-lenin-shacket-set', 'army-green-irish-lenin-shacket-set', 'navy-blue-irish-lenin-shacket-set', 'off-white-irish-lenin-shirt', 'black-basic-tucker-hat', 'blue-basic-tucker-hat', 'grey-basic-tucker-hat', 'black-charsadda-panjedar-chappal', 'brown-charsadda-panjedar-chappal', 'beige-charsadda-panjedar-chappal', 'blue-shalwar-kameez', 'black-shalwar-kameez', 'off-white-shalwar-kameez', 'brown-shalwar-kameez', 'tripod-selfie-stick-white', 'blue-pants', 'brown-pants', 'black-pants', 'blue-stripe-pants', 'charcoal-grey-shalwar-kameez', 'olive-green-shalwar-kameez', 'green-irish-linen', 'blue-irish-linen', 'pink-irish-linen', 'white-irish-linen'));

delete from product_images
where product_id in (select id from products where slug in ('irish-lenin-shirt', 'orange-irish-lenin-shirt', 'pink-irish-lenin-shirt', 'brown-irish-lenin-shacket-set', 'red-wine-maroon-irish-lenin-shacket-set', 'black-irish-lenin-shacket-set', 'army-green-irish-lenin-shacket-set', 'navy-blue-irish-lenin-shacket-set', 'off-white-irish-lenin-shirt', 'black-basic-tucker-hat', 'blue-basic-tucker-hat', 'grey-basic-tucker-hat', 'black-charsadda-panjedar-chappal', 'brown-charsadda-panjedar-chappal', 'beige-charsadda-panjedar-chappal', 'blue-shalwar-kameez', 'black-shalwar-kameez', 'off-white-shalwar-kameez', 'brown-shalwar-kameez', 'tripod-selfie-stick-white', 'blue-pants', 'brown-pants', 'black-pants', 'blue-stripe-pants', 'charcoal-grey-shalwar-kameez', 'olive-green-shalwar-kameez', 'green-irish-linen', 'blue-irish-linen', 'pink-irish-linen', 'white-irish-linen'));

delete from product_variants
where product_id in (select id from products where slug in ('irish-lenin-shirt', 'orange-irish-lenin-shirt', 'pink-irish-lenin-shirt', 'brown-irish-lenin-shacket-set', 'red-wine-maroon-irish-lenin-shacket-set', 'black-irish-lenin-shacket-set', 'army-green-irish-lenin-shacket-set', 'navy-blue-irish-lenin-shacket-set', 'off-white-irish-lenin-shirt', 'black-basic-tucker-hat', 'blue-basic-tucker-hat', 'grey-basic-tucker-hat', 'black-charsadda-panjedar-chappal', 'brown-charsadda-panjedar-chappal', 'beige-charsadda-panjedar-chappal', 'blue-shalwar-kameez', 'black-shalwar-kameez', 'off-white-shalwar-kameez', 'brown-shalwar-kameez', 'tripod-selfie-stick-white', 'blue-pants', 'brown-pants', 'black-pants', 'blue-stripe-pants', 'charcoal-grey-shalwar-kameez', 'olive-green-shalwar-kameez', 'green-irish-linen', 'blue-irish-linen', 'pink-irish-linen', 'white-irish-linen'));

delete from product_option_values
where option_id in (
  select id from product_options
  where product_id in (select id from products where slug in ('irish-lenin-shirt', 'orange-irish-lenin-shirt', 'pink-irish-lenin-shirt', 'brown-irish-lenin-shacket-set', 'red-wine-maroon-irish-lenin-shacket-set', 'black-irish-lenin-shacket-set', 'army-green-irish-lenin-shacket-set', 'navy-blue-irish-lenin-shacket-set', 'off-white-irish-lenin-shirt', 'black-basic-tucker-hat', 'blue-basic-tucker-hat', 'grey-basic-tucker-hat', 'black-charsadda-panjedar-chappal', 'brown-charsadda-panjedar-chappal', 'beige-charsadda-panjedar-chappal', 'blue-shalwar-kameez', 'black-shalwar-kameez', 'off-white-shalwar-kameez', 'brown-shalwar-kameez', 'tripod-selfie-stick-white', 'blue-pants', 'brown-pants', 'black-pants', 'blue-stripe-pants', 'charcoal-grey-shalwar-kameez', 'olive-green-shalwar-kameez', 'green-irish-linen', 'blue-irish-linen', 'pink-irish-linen', 'white-irish-linen'))
);

delete from product_options
where product_id in (select id from products where slug in ('irish-lenin-shirt', 'orange-irish-lenin-shirt', 'pink-irish-lenin-shirt', 'brown-irish-lenin-shacket-set', 'red-wine-maroon-irish-lenin-shacket-set', 'black-irish-lenin-shacket-set', 'army-green-irish-lenin-shacket-set', 'navy-blue-irish-lenin-shacket-set', 'off-white-irish-lenin-shirt', 'black-basic-tucker-hat', 'blue-basic-tucker-hat', 'grey-basic-tucker-hat', 'black-charsadda-panjedar-chappal', 'brown-charsadda-panjedar-chappal', 'beige-charsadda-panjedar-chappal', 'blue-shalwar-kameez', 'black-shalwar-kameez', 'off-white-shalwar-kameez', 'brown-shalwar-kameez', 'tripod-selfie-stick-white', 'blue-pants', 'brown-pants', 'black-pants', 'blue-stripe-pants', 'charcoal-grey-shalwar-kameez', 'olive-green-shalwar-kameez', 'green-irish-linen', 'blue-irish-linen', 'pink-irish-linen', 'white-irish-linen'));

-- 4. Product images

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/1.jpg?v=1754837674',
  'White Irish Linen Shirt',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/2.jpg?v=1754837674',
  'White Irish Linen Shirt',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/3.jpg?v=1754837674',
  'White Irish Linen Shirt',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-O1.jpg?v=1756300424',
  'Orange Irish Linen Shirt',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-O3.jpg?v=1756302128',
  'Orange Irish Linen Shirt',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-O2.jpg?v=1756302128',
  'Orange Irish Linen Shirt',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/shirt-ppp-3.jpg?v=1755552573',
  'Pink Irish Linen Shirt',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/shirt-ppp-2_f7ea7bce-397a-4896-a74a-519a988a2a43.jpg?v=1755552680',
  'Pink Irish Linen Shirt',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/shirt-p-1_6c4234d5-5a4d-4961-89e1-6fa1aad0ac99.jpg?v=1755552680',
  'Pink Irish Linen Shirt',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-b1.jpg?v=1756385142',
  'Brown Irish Linen Shacket Set',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-2.jpg?v=1756385142',
  'Brown Irish Linen Shacket Set',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-3.jpg?v=1756385142',
  'Brown Irish Linen Shacket Set',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-RW1.jpg?v=1756379809',
  'Red Wine Maroon Irish Linen Shacket Set',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-RW2.jpg?v=1756379809',
  'Red Wine Maroon Irish Linen Shacket Set',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-RW3.jpg?v=1756379809',
  'Red Wine Maroon Irish Linen Shacket Set',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/shacket-b-1.jpg?v=1756317088',
  'Black Irish Linen Shacket Set',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/shacket-b-2.jpg?v=1756317087',
  'Black Irish Linen Shacket Set',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/shacket-b-3.jpg?v=1756317088',
  'Black Irish Linen Shacket Set',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-mg1.jpg?v=1756385587',
  'Army Green Irish Linen Shacket Set',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-mg3.jpg?v=1756386021',
  'Army Green Irish Linen Shacket Set',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-mg4.jpg?v=1756386021',
  'Army Green Irish Linen Shacket Set',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-mg2.jpg?v=1756386021',
  'Army Green Irish Linen Shacket Set',
  3,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-bb3.jpg?v=1756394478',
  'Navy Blue Irish Linen Shacket Set',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-bb2.jpg?v=1756394478',
  'Navy Blue Irish Linen Shacket Set',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-bb1.jpg?v=1756394478',
  'Navy Blue Irish Linen Shacket Set',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/1-oww.png?v=1757178589',
  'Off White Irish Linen Shirt',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/2-oww.png?v=1757178589',
  'Off White Irish Linen Shirt',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/3-oww.png?v=1757178589',
  'Off White Irish Linen Shirt',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-basic-tucker-hat'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-black-1.jpg?v=1763735053',
  'Black Basic Tucker Cap',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-basic-tucker-hat'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-black.jpg?v=1763735052',
  'Black Basic Tucker Cap',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-basic-tucker-hat'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-cap-blue_724cc789-c771-4025-a633-09cb05f6f367.jpg?v=1763735128',
  'Blue Basic Tucker Cap',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'grey-basic-tucker-hat'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-cap-grey-2.jpg?v=1763735418',
  'Grey Basic Tucker Cap',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'grey-basic-tucker-hat'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-cap-grey.jpg?v=1763735418',
  'Grey Basic Tucker Cap',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Khairian.blkh.jpg?v=1765645988',
  'Black Leather Charsadda Panjedar Chappal',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Khairian.blk.jpg?v=1765645988',
  'Black Leather Charsadda Panjedar Chappal',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Khairian.blk_c3916f43-cf5f-49ba-bc68-265aef6c626b.jpg?v=1765645988',
  'Black Leather Charsadda Panjedar Chappal',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Khairian._eb1f07cb-7421-4330-9a22-3086905a4670.jpg?v=1765644227',
  'Brown Leather Charsadda Panjedar Chappal',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Khairian.bb_c512bc51-7255-4405-9b6a-f0ee54afeb95.jpg?v=1765644227',
  'Brown Leather Charsadda Panjedar Chappal',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Khairian.beige.jpg?v=1765644370',
  'Beige Suede Leather Charsadda Panjedar Chappal',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Khairian.beig-ae.jpg?v=1765644370',
  'Beige Suede Leather Charsadda Panjedar Chappal',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Blue-3.jpg?v=1771928341',
  'Blue Shalwar Kameez',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Blue-2.jpg?v=1771928341',
  'Blue Shalwar Kameez',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Blue-1.jpg?v=1771928341',
  'Blue Shalwar Kameez',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/WhatsAppImage2026-02-11at1.27.20PM_bb9bd9e4-5f6e-4146-b6ef-077f0017e580.jpg?v=1771928323',
  'Blue Shalwar Kameez',
  3,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Black-3_6f5b64f0-02fb-4e9b-8a29-1c649f97700f.jpg?v=1787144766',
  'Black Shalwar Kameez',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Black-1.jpg?v=1771929697',
  'Black Shalwar Kameez',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Black-2.jpg?v=1771929697',
  'Black Shalwar Kameez',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/5e0c6ee2-2e0e-4266-b961-00729c37a6e8_cb61b5bb-8444-43c4-8239-6cc7c459fa6a.jpg?v=1789210376',
  'Black Shalwar Kameez',
  3,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/whiite-3.jpg?v=1771927920',
  'White Shalwar Kameez',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/whiite-2.jpg?v=1771927920',
  'White Shalwar Kameez',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/whiite-1.jpg?v=1771927920',
  'White Shalwar Kameez',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/5e0c6ee2-2e0e-4266-b961-00729c37a6e8_72d650f8-627b-4568-8e39-904234cd9d2f.jpg?v=1789210336',
  'White Shalwar Kameez',
  3,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Brown-1.jpg?v=1771928655',
  'Brown Shalwar Kameez',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Brown-2_2825daa2-3304-46f5-bb14-a08707053f75.jpg?v=1771928655',
  'Brown Shalwar Kameez',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Brown-3_7dfa71d2-857e-455a-be20-3a9c1e44a787.jpg?v=1771928655',
  'Brown Shalwar Kameez',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/WhatsAppImage2026-02-11at1.27.20PM_c619edcb-2e4b-4052-bc69-ed6d32569fe6.jpg?v=1771928655',
  'Brown Shalwar Kameez',
  3,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'tripod-selfie-stick-white'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-fb1-1.jpg?v=1775570778',
  'Tripod Selfie Stick White',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'tripod-selfie-stick-white'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-fbh-1_22e76197-6f0d-46e7-b432-562fc8748bc0.jpg?v=1775570778',
  'Tripod Selfie Stick White',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'tripod-selfie-stick-white'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-fb-hah-1.jpg?v=1775570778',
  'Tripod Selfie Stick White',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'tripod-selfie-stick-white'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/wb-fb-h-1.jpg?v=1775570778',
  'Tripod Selfie Stick White',
  3,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/web-blue-hh.jpg?v=1775849575',
  'Blue Pants',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/web-blue.jpg?v=1775849575',
  'Blue Pants',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/web-blue-h.jpg?v=1775849575',
  'Blue Pants',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/brown-1_f3be917b-fc71-4dd4-aa07-8e3208c62bb9.jpg?v=1775850328',
  'Brown Pants',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'brown-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/brown-3-h.jpg?v=1775850328',
  'Brown Pants',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/black-pj.jpg?v=1775833593',
  'Black Pants',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'black-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/black-p.jpg?v=1775833593',
  'Black Pants',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-stripe-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/webkk.jpg?v=1775825804',
  'Blue Stripe Pants',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-stripe-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/webk.-k.jpg?v=1775825804',
  'Blue Stripe Pants',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-stripe-pants'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/WhatsAppImage2026-06-10at3.04.10PM.jpg?v=1781089735',
  'Blue Stripe Pants',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/ChatGPTImageAug5_2026_12_49_50PM.png?v=1785922032',
  'Charcoal Grey Shalwar Kameez',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/5e0c6ee2-2e0e-4266-b961-00729c37a6e8_882e1ca8-7ced-47c1-ba80-1b79fbcda9af.jpg?v=1789210297',
  'Charcoal Grey Shalwar Kameez',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/ChatGPTImageAug5_2026_01_09_46AM.png?v=1785922308',
  'Olive Green Shalwar Kameez',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/5e0c6ee2-2e0e-4266-b961-00729c37a6e8.jpg?v=1789210277',
  'Olive Green Shalwar Kameez',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'green-irish-linen'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/green-linen-1.jpg?v=1789209378',
  'Green Irish Linen',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'green-irish-linen'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/green-linen-3.jpg?v=1789209378',
  'Green Irish Linen',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'green-irish-linen'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/green-linen-2.jpg?v=1789209378',
  'Green Irish Linen',
  2,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-irish-linen'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Linen-blue_d1872888-9778-4913-875c-61c51940dd3d.jpg?v=1789209764',
  'Blue Irish Linen',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'blue-irish-linen'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Linen-blue-2.jpg?v=1789209688',
  'Blue Irish Linen',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'pink-irish-linen'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Linen-pink.jpg?v=1789210062',
  'Pink Irish Linen',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'pink-irish-linen'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Linen-pink-2.jpg?v=1789210062',
  'Pink Irish Linen',
  1,
  false
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'white-irish-linen'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Linen-white-2.jpg?v=1789210169',
  'White Irish Linen',
  0,
  true
);

insert into product_images (
  product_id, image_url, alt_text, sort_order, is_primary
) values (
  (select id from products where slug = 'white-irish-linen'),
  'https://cdn.shopify.com/s/files/1/0942/4103/0444/files/Linen-white-1.jpg?v=1789210169',
  'White Irish Linen',
  1,
  false
);


-- 5. Product variants

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'irish-lenin-shirt'),
  'HOM-IRISH-LENIN-SHIRT-WHITE-S',
  'S',
  'White',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'irish-lenin-shirt'),
  'HOM-IRISH-LENIN-SHIRT-WHITE-M',
  'M',
  'White',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'irish-lenin-shirt'),
  'HOM-IRISH-LENIN-SHIRT-WHITE-L',
  'L',
  'White',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  'HOM-ORANGE-IRISH-LENIN-SHIRT-ORANGE-S',
  'S',
  'Orange',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  'HOM-ORANGE-IRISH-LENIN-SHIRT-ORANGE-M',
  'M',
  'Orange',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  'HOM-ORANGE-IRISH-LENIN-SHIRT-ORANGE-L',
  'L',
  'Orange',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  'HOM-PINK-IRISH-LENIN-SHIRT-PINK-S',
  'S',
  'Pink',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  'HOM-PINK-IRISH-LENIN-SHIRT-PINK-M',
  'M',
  'Pink',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  'HOM-PINK-IRISH-LENIN-SHIRT-PINK-L',
  'L',
  'Pink',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  'HOM-BROWN-IRISH-LENIN-SHACKET-SET-BROWN-S',
  'S',
  'Brown',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  'HOM-BROWN-IRISH-LENIN-SHACKET-SET-BROWN-M',
  'M',
  'Brown',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  'HOM-BROWN-IRISH-LENIN-SHACKET-SET-BROWN-L',
  'L',
  'Brown',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  'HOM-RED-WINE-MAROON-IRISH-LENIN-SHACKET-SET-RED-WINE-MAROON-S',
  'S',
  'Red Wine Maroon',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  'HOM-RED-WINE-MAROON-IRISH-LENIN-SHACKET-SET-RED-WINE-MAROON-M',
  'M',
  'Red Wine Maroon',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  'HOM-RED-WINE-MAROON-IRISH-LENIN-SHACKET-SET-RED-WINE-MAROON-L',
  'L',
  'Red Wine Maroon',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  'HOM-BLACK-IRISH-LENIN-SHACKET-SET-BLACK-S',
  'S',
  'Black',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  'HOM-BLACK-IRISH-LENIN-SHACKET-SET-BLACK-M',
  'M',
  'Black',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  'HOM-BLACK-IRISH-LENIN-SHACKET-SET-BLACK-L',
  'L',
  'Black',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  'HOM-ARMY-GREEN-IRISH-LENIN-SHACKET-SET-ARMY-GREEN-S',
  'S',
  'Army Green',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  'HOM-ARMY-GREEN-IRISH-LENIN-SHACKET-SET-ARMY-GREEN-M',
  'M',
  'Army Green',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  'HOM-ARMY-GREEN-IRISH-LENIN-SHACKET-SET-ARMY-GREEN-L',
  'L',
  'Army Green',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  'HOM-NAVY-BLUE-IRISH-LENIN-SHACKET-SET-NAVY-BLUE-S',
  'S',
  'Navy Blue',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  'HOM-NAVY-BLUE-IRISH-LENIN-SHACKET-SET-NAVY-BLUE-M',
  'M',
  'Navy Blue',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  'HOM-NAVY-BLUE-IRISH-LENIN-SHACKET-SET-NAVY-BLUE-L',
  'L',
  'Navy Blue',
  25000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  'HOM-OFF-WHITE-IRISH-LENIN-SHIRT-OFFWHITE-S',
  'S',
  'OffWhite',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  'HOM-OFF-WHITE-IRISH-LENIN-SHIRT-OFFWHITE-M',
  'M',
  'OffWhite',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  'HOM-OFF-WHITE-IRISH-LENIN-SHIRT-OFFWHITE-L',
  'L',
  'OffWhite',
  10000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-basic-tucker-hat'),
  'HOM-BLACK-BASIC-TUCKER-HAT-BLACK',
  NULL,
  'Black',
  1500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-basic-tucker-hat'),
  'HOM-BLUE-BASIC-TUCKER-HAT-BLUE',
  NULL,
  'Blue',
  1500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'grey-basic-tucker-hat'),
  'HOM-GREY-BASIC-TUCKER-HAT-GREY',
  NULL,
  'Grey',
  1500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'HOM-BLACK-CHARSADDA-PANJEDAR-CHAPPAL-BLACK-6',
  '6',
  'Black',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'HOM-BLACK-CHARSADDA-PANJEDAR-CHAPPAL-BLACK-7',
  '7',
  'Black',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'HOM-BLACK-CHARSADDA-PANJEDAR-CHAPPAL-BLACK-8',
  '8',
  'Black',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'HOM-BLACK-CHARSADDA-PANJEDAR-CHAPPAL-BLACK-9',
  '9',
  'Black',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'HOM-BLACK-CHARSADDA-PANJEDAR-CHAPPAL-BLACK-10',
  '10',
  'Black',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'HOM-BLACK-CHARSADDA-PANJEDAR-CHAPPAL-BLACK-11',
  '11',
  'Black',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'HOM-BLACK-CHARSADDA-PANJEDAR-CHAPPAL-BLACK-12',
  '12',
  'Black',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'HOM-BLACK-CHARSADDA-PANJEDAR-CHAPPAL-BLACK-13',
  '13',
  'Black',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'HOM-BLACK-CHARSADDA-PANJEDAR-CHAPPAL-BLACK-14',
  '14',
  'Black',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'HOM-BROWN-CHARSADDA-PANJEDAR-CHAPPAL-BROWN-6',
  '6',
  'Brown',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'HOM-BROWN-CHARSADDA-PANJEDAR-CHAPPAL-BROWN-7',
  '7',
  'Brown',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'HOM-BROWN-CHARSADDA-PANJEDAR-CHAPPAL-BROWN-8',
  '8',
  'Brown',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'HOM-BROWN-CHARSADDA-PANJEDAR-CHAPPAL-BROWN-9',
  '9',
  'Brown',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'HOM-BROWN-CHARSADDA-PANJEDAR-CHAPPAL-BROWN-10',
  '10',
  'Brown',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'HOM-BROWN-CHARSADDA-PANJEDAR-CHAPPAL-BROWN-11',
  '11',
  'Brown',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'HOM-BROWN-CHARSADDA-PANJEDAR-CHAPPAL-BROWN-12',
  '12',
  'Brown',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'HOM-BROWN-CHARSADDA-PANJEDAR-CHAPPAL-BROWN-13',
  '13',
  'Brown',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'HOM-BROWN-CHARSADDA-PANJEDAR-CHAPPAL-BROWN-14',
  '14',
  'Brown',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'HOM-BEIGE-CHARSADDA-PANJEDAR-CHAPPAL-BEIGE-6',
  '6',
  'Beige',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'HOM-BEIGE-CHARSADDA-PANJEDAR-CHAPPAL-BEIGE-7',
  '7',
  'Beige',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'HOM-BEIGE-CHARSADDA-PANJEDAR-CHAPPAL-BEIGE-8',
  '8',
  'Beige',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'HOM-BEIGE-CHARSADDA-PANJEDAR-CHAPPAL-BEIGE-9',
  '9',
  'Beige',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'HOM-BEIGE-CHARSADDA-PANJEDAR-CHAPPAL-BEIGE-10',
  '10',
  'Beige',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'HOM-BEIGE-CHARSADDA-PANJEDAR-CHAPPAL-BEIGE-11',
  '11',
  'Beige',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'HOM-BEIGE-CHARSADDA-PANJEDAR-CHAPPAL-BEIGE-12',
  '12',
  'Beige',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'HOM-BEIGE-CHARSADDA-PANJEDAR-CHAPPAL-BEIGE-13',
  '13',
  'Beige',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'HOM-BEIGE-CHARSADDA-PANJEDAR-CHAPPAL-BEIGE-14',
  '14',
  'Beige',
  4500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'HOM-BLUE-SHALWAR-KAMEEZ-BLUE-S',
  'S',
  'Blue',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'HOM-BLUE-SHALWAR-KAMEEZ-BLUE-M',
  'M',
  'Blue',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'HOM-BLUE-SHALWAR-KAMEEZ-BLUE-L',
  'L',
  'Blue',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'HOM-BLUE-SHALWAR-KAMEEZ-BLUE-XL',
  'XL',
  'Blue',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'HOM-BLACK-SHALWAR-KAMEEZ-BLACK-S',
  'S',
  'Black',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'HOM-BLACK-SHALWAR-KAMEEZ-BLACK-M',
  'M',
  'Black',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'HOM-BLACK-SHALWAR-KAMEEZ-BLACK-L',
  'L',
  'Black',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'HOM-BLACK-SHALWAR-KAMEEZ-BLACK-XL',
  'XL',
  'Black',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'HOM-OFF-WHITE-SHALWAR-KAMEEZ-OFF-WHITE-S',
  'S',
  'Off White',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'HOM-OFF-WHITE-SHALWAR-KAMEEZ-OFF-WHITE-M',
  'M',
  'Off White',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'HOM-OFF-WHITE-SHALWAR-KAMEEZ-OFF-WHITE-L',
  'L',
  'Off White',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'HOM-OFF-WHITE-SHALWAR-KAMEEZ-OFF-WHITE-XL',
  'XL',
  'Off White',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'HOM-BROWN-SHALWAR-KAMEEZ-BROWN-S',
  'S',
  'Brown',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'HOM-BROWN-SHALWAR-KAMEEZ-BROWN-M',
  'M',
  'Brown',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'HOM-BROWN-SHALWAR-KAMEEZ-BROWN-L',
  'L',
  'Brown',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'HOM-BROWN-SHALWAR-KAMEEZ-BROWN-XL',
  'XL',
  'Brown',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'tripod-selfie-stick-white'),
  'Tripod Selfie Stick Black',
  NULL,
  NULL,
  10000.00,
  NULL,
  0,
  1000.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-pants'),
  'HOM-BLUE-PANTS-BLUE-S',
  'S',
  'Blue',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-pants'),
  'HOM-BLUE-PANTS-BLUE-M',
  'M',
  'Blue',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-pants'),
  'HOM-BLUE-PANTS-BLUE-L',
  'L',
  'Blue',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-pants'),
  'HOM-BROWN-PANTS-BROWN-S',
  'S',
  'Brown',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-pants'),
  'HOM-BROWN-PANTS-BROWN-M',
  'M',
  'Brown',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'brown-pants'),
  'HOM-BROWN-PANTS-BROWN-L',
  'L',
  'Brown',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-pants'),
  'HOM-BLACK-PANTS-BLACK-S',
  'S',
  'Black',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-pants'),
  'HOM-BLACK-PANTS-BLACK-M',
  'M',
  'Black',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'black-pants'),
  'HOM-BLACK-PANTS-BLACK-L',
  'L',
  'Black',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-stripe-pants'),
  'HOM-BLUE-STRIPE-PANTS-BLUE-STRIPE-S',
  'S',
  'Blue Stripe',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-stripe-pants'),
  'HOM-BLUE-STRIPE-PANTS-BLUE-STRIPE-M',
  'M',
  'Blue Stripe',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-stripe-pants'),
  'HOM-BLUE-STRIPE-PANTS-BLUE-STRIPE-L',
  'L',
  'Blue Stripe',
  7000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  'HOM-CHARCOAL-GREY-SHALWAR-KAMEEZ-CHARCOAL-GREY-S',
  'S',
  'Charcoal Grey',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  'HOM-CHARCOAL-GREY-SHALWAR-KAMEEZ-CHARCOAL-GREY-M',
  'M',
  'Charcoal Grey',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  'HOM-CHARCOAL-GREY-SHALWAR-KAMEEZ-CHARCOAL-GREY-L',
  'L',
  'Charcoal Grey',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  'HOM-CHARCOAL-GREY-SHALWAR-KAMEEZ-CHARCOAL-GREY-XL',
  'XL',
  'Charcoal Grey',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  'HOM-OLIVE-GREEN-SHALWAR-KAMEEZ-OLIVE-GREEN-S',
  'S',
  'Olive Green',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  'HOM-OLIVE-GREEN-SHALWAR-KAMEEZ-OLIVE-GREEN-M',
  'M',
  'Olive Green',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  'HOM-OLIVE-GREEN-SHALWAR-KAMEEZ-OLIVE-GREEN-L',
  'L',
  'Olive Green',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  'HOM-OLIVE-GREEN-SHALWAR-KAMEEZ-OLIVE-GREEN-XL',
  'XL',
  'Olive Green',
  15000.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'green-irish-linen'),
  'HOM-GREEN-IRISH-LINEN-GREEN-S',
  'S',
  'Green',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'green-irish-linen'),
  'HOM-GREEN-IRISH-LINEN-GREEN-M',
  'M',
  'Green',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'green-irish-linen'),
  'HOM-GREEN-IRISH-LINEN-GREEN-L',
  'L',
  'Green',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'green-irish-linen'),
  'HOM-GREEN-IRISH-LINEN-GREEN-XL',
  'XL',
  'Green',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-irish-linen'),
  'HOM-BLUE-IRISH-LINEN-BLUE-S',
  'S',
  'Blue',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-irish-linen'),
  'HOM-BLUE-IRISH-LINEN-BLUE-M',
  'M',
  'Blue',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-irish-linen'),
  'HOM-BLUE-IRISH-LINEN-BLUE-L',
  'L',
  'Blue',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'blue-irish-linen'),
  'HOM-BLUE-IRISH-LINEN-BLUE-XL',
  'XL',
  'Blue',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'pink-irish-linen'),
  'HOM-PINK-IRISH-LINEN-PINK-S',
  'S',
  'Pink',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'pink-irish-linen'),
  'HOM-PINK-IRISH-LINEN-PINK-M',
  'M',
  'Pink',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'pink-irish-linen'),
  'HOM-PINK-IRISH-LINEN-PINK-L',
  'L',
  'Pink',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'pink-irish-linen'),
  'HOM-PINK-IRISH-LINEN-PINK-XL',
  'XL',
  'Pink',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'white-irish-linen'),
  'HOM-WHITE-IRISH-LINEN-WHITE-S',
  'S',
  'White',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'white-irish-linen'),
  'HOM-WHITE-IRISH-LINEN-WHITE-M',
  'M',
  'White',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'white-irish-linen'),
  'HOM-WHITE-IRISH-LINEN-WHITE-L',
  'L',
  'White',
  8500.00,
  NULL,
  0,
  500.00,
  true
);

insert into product_variants (
  product_id, sku, size, color, price, compare_at_price,
  stock_quantity, weight, is_active
) values (
  (select id from products where slug = 'white-irish-linen'),
  'HOM-WHITE-IRISH-LINEN-WHITE-XL',
  'XL',
  'White',
  8500.00,
  NULL,
  0,
  500.00,
  true
);


-- 6. Tags

insert into tags (name, slug)
values ('Made to Order', 'made-to-order')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Shirt', 'shirt')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Shirt Tag', 'shirt-tag')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('orange', 'orange')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Pink', 'pink')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Brown', 'brown')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Shacket Set', 'shacket-set')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Red Wine Maroon', 'red-wine-maroon')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Black', 'black')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Army Green', 'army-green')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Navy Blue', 'navy-blue')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('OffWhite', 'offwhite')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Cap', 'cap')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Blue', 'blue')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Grey', 'grey')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('chappal', 'chappal')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('beige', 'beige')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Shalwar Kameez', 'shalwar-kameez')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Off White', 'off-white')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('gadget', 'gadget')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('White', 'white')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('new in', 'new-in')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Pants', 'pants')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('charcoal grey', 'charcoal-grey')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Olive Green', 'olive-green')
on conflict (slug) do update set name = excluded.name;

insert into tags (name, slug)
values ('Green', 'green')
on conflict (slug) do update set name = excluded.name;


-- 7. Product/tag relationships

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'irish-lenin-shirt'),
  (select id from tags where slug = 'made-to-order')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'irish-lenin-shirt'),
  (select id from tags where slug = 'shirt')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'irish-lenin-shirt'),
  (select id from tags where slug = 'shirt-tag')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  (select id from tags where slug = 'orange')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  (select id from tags where slug = 'shirt')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  (select id from tags where slug = 'pink')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  (select id from tags where slug = 'shirt')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  (select id from tags where slug = 'brown')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  (select id from tags where slug = 'shacket-set')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  (select id from tags where slug = 'red-wine-maroon')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  (select id from tags where slug = 'shacket-set')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  (select id from tags where slug = 'black')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  (select id from tags where slug = 'shacket-set')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  (select id from tags where slug = 'army-green')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  (select id from tags where slug = 'shacket-set')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  (select id from tags where slug = 'navy-blue')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  (select id from tags where slug = 'shacket-set')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  (select id from tags where slug = 'offwhite')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  (select id from tags where slug = 'shirt')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-basic-tucker-hat'),
  (select id from tags where slug = 'black')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-basic-tucker-hat'),
  (select id from tags where slug = 'cap')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-basic-tucker-hat'),
  (select id from tags where slug = 'blue')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-basic-tucker-hat'),
  (select id from tags where slug = 'cap')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'grey-basic-tucker-hat'),
  (select id from tags where slug = 'cap')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'grey-basic-tucker-hat'),
  (select id from tags where slug = 'grey')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  (select id from tags where slug = 'black')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  (select id from tags where slug = 'chappal')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  (select id from tags where slug = 'chappal')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  (select id from tags where slug = 'beige')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  (select id from tags where slug = 'chappal')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-shalwar-kameez'),
  (select id from tags where slug = 'blue')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-shalwar-kameez'),
  (select id from tags where slug = 'shalwar-kameez')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-shalwar-kameez'),
  (select id from tags where slug = 'black')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-shalwar-kameez'),
  (select id from tags where slug = 'shalwar-kameez')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'off-white-shalwar-kameez'),
  (select id from tags where slug = 'off-white')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'off-white-shalwar-kameez'),
  (select id from tags where slug = 'shalwar-kameez')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'brown-shalwar-kameez'),
  (select id from tags where slug = 'brown')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'brown-shalwar-kameez'),
  (select id from tags where slug = 'shalwar-kameez')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'tripod-selfie-stick-white'),
  (select id from tags where slug = 'gadget')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'tripod-selfie-stick-white'),
  (select id from tags where slug = 'white')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-pants'),
  (select id from tags where slug = 'blue')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-pants'),
  (select id from tags where slug = 'new-in')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-pants'),
  (select id from tags where slug = 'pants')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'brown-pants'),
  (select id from tags where slug = 'brown')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'brown-pants'),
  (select id from tags where slug = 'new-in')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'brown-pants'),
  (select id from tags where slug = 'pants')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-pants'),
  (select id from tags where slug = 'black')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-pants'),
  (select id from tags where slug = 'new-in')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'black-pants'),
  (select id from tags where slug = 'pants')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-stripe-pants'),
  (select id from tags where slug = 'blue')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-stripe-pants'),
  (select id from tags where slug = 'new-in')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-stripe-pants'),
  (select id from tags where slug = 'pants')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  (select id from tags where slug = 'charcoal-grey')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  (select id from tags where slug = 'shalwar-kameez')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  (select id from tags where slug = 'olive-green')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  (select id from tags where slug = 'shalwar-kameez')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'green-irish-linen'),
  (select id from tags where slug = 'green')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'green-irish-linen'),
  (select id from tags where slug = 'shirt')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-irish-linen'),
  (select id from tags where slug = 'blue')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'blue-irish-linen'),
  (select id from tags where slug = 'shirt')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'pink-irish-linen'),
  (select id from tags where slug = 'blue')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'pink-irish-linen'),
  (select id from tags where slug = 'shirt')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'white-irish-linen'),
  (select id from tags where slug = 'shirt')
on conflict do nothing;

insert into product_tags (product_id, tag_id)
select
  (select id from products where slug = 'white-irish-linen'),
  (select id from tags where slug = 'white')
on conflict do nothing;


-- 8. Product options and values

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'irish-lenin-shirt'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'irish-lenin-shirt')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'White',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'irish-lenin-shirt'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'orange-irish-lenin-shirt')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Orange',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'orange-irish-lenin-shirt'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'orange-irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'orange-irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'orange-irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'pink-irish-lenin-shirt')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Pink',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'pink-irish-lenin-shirt'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'pink-irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'pink-irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'pink-irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-irish-lenin-shacket-set')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Brown',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'brown-irish-lenin-shacket-set'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Red Wine Maroon',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'red-wine-maroon-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-irish-lenin-shacket-set')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Black',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'black-irish-lenin-shacket-set'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'army-green-irish-lenin-shacket-set')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Army Green',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'army-green-irish-lenin-shacket-set'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'army-green-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'army-green-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'army-green-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'navy-blue-irish-lenin-shacket-set')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Navy Blue',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'navy-blue-irish-lenin-shacket-set'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'navy-blue-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'navy-blue-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'navy-blue-irish-lenin-shacket-set')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'off-white-irish-lenin-shirt')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'OffWhite',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'off-white-irish-lenin-shirt'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'off-white-irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'off-white-irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'off-white-irish-lenin-shirt')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'black-basic-tucker-hat'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-basic-tucker-hat')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Black',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'blue-basic-tucker-hat'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-basic-tucker-hat')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Blue',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'grey-basic-tucker-hat'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'grey-basic-tucker-hat')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Grey',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Black',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'black-charsadda-panjedar-chappal'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '6',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '7',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '8',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '9',
  3
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '10',
  4
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '11',
  5
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '12',
  6
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '13',
  7
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '14',
  8
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Brown',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'brown-charsadda-panjedar-chappal'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '6',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '7',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '8',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '9',
  3
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '10',
  4
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '11',
  5
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '12',
  6
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '13',
  7
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '14',
  8
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Beige',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'beige-charsadda-panjedar-chappal'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '6',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '7',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '8',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '9',
  3
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '10',
  4
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '11',
  5
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '12',
  6
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '13',
  7
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'beige-charsadda-panjedar-chappal')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  '14',
  8
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-shalwar-kameez')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Blue',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'blue-shalwar-kameez'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-shalwar-kameez')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Black',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'black-shalwar-kameez'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'off-white-shalwar-kameez')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Off White',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'off-white-shalwar-kameez'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'off-white-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'off-white-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'off-white-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'off-white-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-shalwar-kameez')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Brown',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'brown-shalwar-kameez'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'tripod-selfie-stick-white'),
  'Title',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'tripod-selfie-stick-white')
      and name = 'Title'
    order by sort_order
    limit 1
  ),
  'Default Title',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'blue-pants'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-pants')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Blue',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'blue-pants'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'brown-pants'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-pants')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Brown',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'brown-pants'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'brown-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'black-pants'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-pants')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Black',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'black-pants'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'black-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'blue-stripe-pants'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-stripe-pants')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Blue Stripe',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'blue-stripe-pants'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-stripe-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-stripe-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-stripe-pants')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'charcoal-grey-shalwar-kameez')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Charcoal Grey',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'charcoal-grey-shalwar-kameez'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'charcoal-grey-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'charcoal-grey-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'charcoal-grey-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'charcoal-grey-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'olive-green-shalwar-kameez')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Olive Green',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'olive-green-shalwar-kameez'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'olive-green-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'olive-green-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'olive-green-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'olive-green-shalwar-kameez')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'green-irish-linen'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'green-irish-linen')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Green',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'green-irish-linen'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'green-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'green-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'green-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'green-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'blue-irish-linen'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-irish-linen')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Blue',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'blue-irish-linen'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'blue-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'pink-irish-linen'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'pink-irish-linen')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'Pink',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'pink-irish-linen'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'pink-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'pink-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'pink-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'pink-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'white-irish-linen'),
  'Color',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'white-irish-linen')
      and name = 'Color'
    order by sort_order
    limit 1
  ),
  'White',
  0
);

insert into product_options (product_id, name, sort_order)
values (
  (select id from products where slug = 'white-irish-linen'),
  'Size',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'white-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'S',
  0
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'white-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'M',
  1
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'white-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'L',
  2
);

insert into product_option_values (option_id, value, sort_order)
values (
  (
    select id from product_options
    where product_id = (select id from products where slug = 'white-irish-linen')
      and name = 'Size'
    order by sort_order
    limit 1
  ),
  'XL',
  3
);


commit;

-- 9. Verification
select count(*) as imported_products
from products
where slug in ('irish-lenin-shirt', 'orange-irish-lenin-shirt', 'pink-irish-lenin-shirt', 'brown-irish-lenin-shacket-set', 'red-wine-maroon-irish-lenin-shacket-set', 'black-irish-lenin-shacket-set', 'army-green-irish-lenin-shacket-set', 'navy-blue-irish-lenin-shacket-set', 'off-white-irish-lenin-shirt', 'black-basic-tucker-hat', 'blue-basic-tucker-hat', 'grey-basic-tucker-hat', 'black-charsadda-panjedar-chappal', 'brown-charsadda-panjedar-chappal', 'beige-charsadda-panjedar-chappal', 'blue-shalwar-kameez', 'black-shalwar-kameez', 'off-white-shalwar-kameez', 'brown-shalwar-kameez', 'tripod-selfie-stick-white', 'blue-pants', 'brown-pants', 'black-pants', 'blue-stripe-pants', 'charcoal-grey-shalwar-kameez', 'olive-green-shalwar-kameez', 'green-irish-linen', 'blue-irish-linen', 'pink-irish-linen', 'white-irish-linen');

select
  c.name as category,
  count(p.id) as products
from categories c
left join products p on p.category_id = c.id
group by c.id, c.name
order by c.sort_order;

select
  p.name,
  p.slug,
  p.base_price,
  p.stock_quantity,
  count(distinct pi.id) as images,
  count(distinct pv.id) as variants
from products p
left join product_images pi on pi.product_id = p.id
left join product_variants pv on pv.product_id = p.id
where p.slug in ('irish-lenin-shirt', 'orange-irish-lenin-shirt', 'pink-irish-lenin-shirt', 'brown-irish-lenin-shacket-set', 'red-wine-maroon-irish-lenin-shacket-set', 'black-irish-lenin-shacket-set', 'army-green-irish-lenin-shacket-set', 'navy-blue-irish-lenin-shacket-set', 'off-white-irish-lenin-shirt', 'black-basic-tucker-hat', 'blue-basic-tucker-hat', 'grey-basic-tucker-hat', 'black-charsadda-panjedar-chappal', 'brown-charsadda-panjedar-chappal', 'beige-charsadda-panjedar-chappal', 'blue-shalwar-kameez', 'black-shalwar-kameez', 'off-white-shalwar-kameez', 'brown-shalwar-kameez', 'tripod-selfie-stick-white', 'blue-pants', 'brown-pants', 'black-pants', 'blue-stripe-pants', 'charcoal-grey-shalwar-kameez', 'olive-green-shalwar-kameez', 'green-irish-linen', 'blue-irish-linen', 'pink-irish-linen', 'white-irish-linen')
group by p.id, p.name, p.slug, p.base_price, p.stock_quantity
order by p.name;
