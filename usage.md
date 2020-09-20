---
layout: page
title: Usage
---

`_config.yml`
------------------------------------------------------------------------------------------------------------------------------------

### Links

The menu links are populated by the `links` config. `links` is an array of objects containing `url`, or the url of the page and 
`text`, or the text to display. By default, the link url is prepended with the site url. To provide a direct link url, set `direct` 
to `true` in the link object.

```yml
# Page links
links:
  - url: '/showcase'
    text: Showcase
  - url: '/usage'
    text: Usage
  - url: '/bogus'
    text: Bogus
    # Example of direct link
  - url: 'http://andydevs.github.io'
    text: External
    direct: true
```

### Social

Social media links in the footer can be configured using the `social` object. The following social options are provided:

- `social.youtube`
- `social.linkedin`
- `social.twitter`
- `social.instagram`
- `social.facebook`
- `social.github`
- `social.email`

### Footer

The footer contains the site description (set at `description`) as well as the copyright notice. The copyright year is set by
`copyright`, and the author is pulled from `author`.

Layouts
------------------------------------------------------------------------------------------------------------------------------------

Layouts include 'page', 'post', 'centered', and 'post-index'.

'page' and 'post' are mostly the same, except 'post' wraps content in an
`article` tag and is used for main post.

Simple Design provides the 'post-index' layout to display an index of posts
layed out. This is used in the index page of this site.

'centered' is for content that is positioned in the center of the screen.
This is used by the [404 Page](/bogus)

Variables
------------------------------------------------------------------------------------------------------------------------------------

Create an 'assets/css/main.scss' file, and import the style library.
Variables are set before the import

```scss
---
---

// Declare variables here

// Import file
@import "{{ site.theme }}"
```

| Category  | Variables                                                                                                           |
|:----------|:--------------------------------------------------------------------------------------------------------------------|
| Font      | `$font-family` <br> `$code-font-family`                                                                             |
| Spacing   | `$spacing-unit`                                                                                                     |
| Font Size | `$mega-font-size` <br> `$large-font-size` <br> `$medium-font-size` <br> `$normal-font-size` <br> `$small-font-size` |
| Colors    | `$white-color` <br> `$light-gray-color` <br> `$dark-gray-color` <br> `$black-color`                                 |

Dynamic Tables
------------------------------------------------------------------------------------------------------------------------------------

Dynamic Tables maintain equal width cells on small displays and allow horizontal scrolling through the table. To make a table 
dynamic in Markdown, wrap the table in a `horizontal-scroll` div as follows:

_Note: make sure there are empty lines between the html tags and the markdown table._

```markdown
<div class='horizontal-scroll' markdown='block'>

| Category  | Variables                                                                                                           |
|:---------:|:-------------------------------------------------------------------------------------------------------------------:|
| Font      | `$font-family` <br> `$code-font-family`                                                                             |
| Spacing   | `$spacing-unit`                                                                                                     |
| Font Size | `$mega-font-size` <br> `$large-font-size` <br> `$medium-font-size` <br> `$normal-font-size` <br> `$small-font-size` |
| Colors    | `$white-color` <br> `$light-gray-color` <br> `$dark-gray-color` <br> `$black-color`                                 |

</div>
```
<div class='horizontal-scroll' markdown='block'>

| Category  | Variables                                                                                                           |
|:----------|:--------------------------------------------------------------------------------------------------------------------|
| Font      | `$font-family` <br> `$code-font-family`                                                                             |
| Spacing   | `$spacing-unit`                                                                                                     |
| Font Size | `$mega-font-size` <br> `$large-font-size` <br> `$medium-font-size` <br> `$normal-font-size` <br> `$small-font-size` |
| Colors    | `$white-color` <br> `$light-gray-color` <br> `$dark-gray-color` <br> `$black-color`                                 |

</div>