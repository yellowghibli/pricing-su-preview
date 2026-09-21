# Design System: Pricing.su

Источник правды по визуалу и компонентам. Примеры — `styleguide.html` (1440px).

**Направление:** плакет / ценовая этикетка — тёплая бумага, синий `#173fc4`, оранжевый `#c94b0b`, Geologica, крупная типографика, круглые иллюстрации в стиле соцреализма.

## Область применения

- Poster-слой — desktop ≥1440px; ниже — базовые стили из `:root` в HTML.
- Не восстанавливать удалённые декоративные приёмы (иллюстрации домино и т.п.).

## Шрифт

- **Семейство:** Geologica 400 / 500 / 700 через Google Fonts.
- **CSS:** `--font-family: "Geologica", -apple-system, BlinkMacSystemFont, Arial, sans-serif`
- **Правило:** размер/вес задаёт типографическая роль; цвет текста — отдельным токеном.

## Цвета — поверхности

| Токен | HEX | Назначение |
| --- | --- | --- |
| `--surface-page` | `#f8f8f2` | Фон страницы, шапка |
| `--surface-section` | `#eeeee6` | Секционные подложки, placeholder-bg |
| `--surface-secondary` | `#e4eaff` | Базовый фон `.ui-card` |
| `--surface-primary` | `#c94b0b` | CTA, этикетка hero, оранжевые акценты |
| `--surface-primary-hover` | `#b33e06` | Hover залитых CTA |
| `--surface-accent` | `#173fc4` | Синие блоки, метрики, hero H1, иконки |
| `--surface-hero-paper` | `#f1eadb` | Бумажная зона hero (градиент) |

### Градиенты карточек аудитории

Токены `--aud-tone-a` … `--aud-tone-d`: `#fafbff`, `#e8edff`, `#d4dfff`, `#bccaff`.  
Применение: `.ui-card--grad`, `background-size: 300% 100%`, позиция по `nth-child`: 1 → 0%, 2 → 50%, 3 → 100%.

### Градиенты бейджей

- Синие: `--badge-tone-a` … `--badge-tone-d` (`#fff` → `#f0f2ff`).
- Оранжевые: `--badge-tone-orange-a` / `--badge-tone-orange-b` (`#fff` → `#fffaf7`).

## Цвета — текст

| Токен | HEX | Назначение |
| --- | --- | --- |
| `--text-primary` | `#172346` | Основной текст |
| `--text-secondary` | `#586079` | Подписи, роли, placeholder |
| `--text-inverse` | `#ffffff` | Текст на синем и оранжевом |
| `--text-action` | `#172346` | Текст регистрации в шапке (poster) |

### Брендовые цвета в тексте (локальные классы)

- `.brand-ozon` — градиент `#005bff → #7654e8 → #f91155` (`background-clip: text`).
- `.brand-wildberries` — `#a73afd`.
- `.brand-yandex` — `#fc3f1d`.
- `.brand-excel` — `#217346`.

## Цвета — границы и фокус

| Токен | HEX |
| --- | --- |
| `--border-default` | `#cbd0d7` |
| `--border-subtle` | `#dce0e7` |
| `--border-field` | `#929bad` |
| `--focus-color` | `#173fc4` |

## Типографика — 9 ролей

Цвет задаётся отдельно. Tracking для акцентной Geologica: `--tracking-accent: -0.05em` (заголовки карточек, секций, FAQ).

| Роль | CSS-токен / класс | Size / Leading | Weight | Tracking | Пример на лендинге |
| --- | --- | --- | ---: | --- | --- |
| Hero H1 | локально `700 72px/76px` | 72 / 76 | 700 | `-0.04em` (`--tracking-display`) | «РРЦ на Ozon и Wildberries» |
| Heading | `--type-heading` | 48 / 52 | 700 | `-0.05em` | Заголовки секций, цена калькулятора |
| Stat | `--type-stat` | 96 / 100 | 700 | `-0.05em` | Номера в «Как работает» (`#how .how-num`) |
| Title | `--type-title` | 24 / 32 | 700 | `-0.05em` | Заголовки карточек, FAQ, клиентов |
| Subtitle | `--type-subtitle` | 20 / 26 | 500 | normal | Hero-лид, крупные CTA |
| Body | `--type-body` | 16 / 24 | 400 | normal | Абзацы, списки, кнопки, поля |
| Body strong | `--type-body-strong` | 16 / 24 | 700 | normal | `strong`, `th`, подписи калькулятора |
| Brand | `--type-brand` | 32 / 40 | 700 | `-0.04em` | Логотип «Pricing.su» |
| Badge | `--type-badge` | 12 / 16 | 400 | `+0.12em` | Caps-бейджи `.ui-badge` |

### Карточка клиента (комбинация ролей)

- Название: Title + `--tracking-accent`.
- Подпись `<small>`: Body + `--text-secondary` + normal tracking.

## Геометрия и отступы

| Токен | Значение | Назначение |
| --- | ---: | --- |
| `--content-width` | 1248px | Максимум `.container` |
| `--page-gutter` | 32px | Боковые поля |
| `--card-padding` | 32px | Карточки, форма |
| `--panel-padding-y` | 48px | Полоса метрик, demo-final |
| `--block-pad-top` | 104px | Верх секции |
| `--block-pad-bottom` | 88px (стайлгайд) / 56px (index poster) | Низ секции |
| `--radius-control` | 8px | Кнопки, cons-num, поля |
| `--radius-panel` | 16px | Карточки, скриншоты, форма |
| `--radius-section` | 16px | CTA-блок |
| `--radius-field` | 8px | Поля формы |
| `--radius-badge` | 999px | Pill-бейджи |
| `--shadow-label` | `0 16px 28px rgb(23 35 70 / 16%)` | Hero-этикетка, скриншоты |

Секции poster-слоя: `padding: var(--block-pad-top) 0 var(--block-pad-bottom)`.

## Компоненты

### `.ui-badge`

- Шрифт: `--type-badge`, uppercase, padding `2px 8px`, radius pill, без обводки.
- Модификаторы тона:
  - `.ui-badge--tone-orange` — текст `--surface-primary`, оранжевый градиент фона.
  - `.ui-badge--tone-1` … `--tone-3` — текст `--surface-accent`, синий градиент из `--badge-tone-*`.

### `.ui-card`

- Padding: `--card-padding` (32px).
- Radius: `--radius-panel` (16px).
- Фон по умолчанию: `--surface-secondary`.
- Градиент: `.ui-card--grad` + `.ui-card--grad-1|2|3` для позиции фона.
- Заголовок `h3`: `--type-title` + `--tracking-accent`, margin-bottom 16px.
- Лид `p.text-muted`: `--type-body` + `--text-secondary`.
- Список: `--type-body`, disc, `padding-left: 1.15em`, items `padding: 8px 0`.

### Кнопки `.btn` (poster)

- Min-height 56px, padding `12px 28px`, radius `--radius-control`.
- Hero CTA: фон `--surface-accent`, hover `--text-primary`.
- Залитые: `--surface-primary` / hover `--surface-primary-hover`, текст inverse.

### Шапка

- Sticky, фон `--surface-page`.
- При прокрутке: `.header.is-scrolled` → `box-shadow: 0 8px 28px rgb(23 35 70 / 8%)`.

## Контурные иконки

- **Источник по умолчанию:** Heroicons Outline.
- **Формат:** inline SVG, `viewBox="0 0 24 24"`, `fill="none"`, `stroke="currentColor"`, `stroke-width="1.5"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.
- **Размер:** 52×52 px (фиксированный, без scale).
- **Цвет:** `currentColor`, обычно `--surface-accent`.

## Круглые иллюстрации

- **Стиль:** соцреализм — плакетная живопись, героический бытовой сюжет, насыщенные красный и синий.
- **Слот:** `--illus-circle-col: clamp(96px, 10vw, 132px)` — круг `border-radius: 50%`, `object-fit: contain`.
- **Пример:** `assets/economy-worker.jpg`.
- Новые иллюстрации — только в этом стиле, только круглые слоты.

Poster-токены применять только в `@media (min-width: 1440px)` или эквиваленте в HTML.
