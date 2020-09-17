---
layout: page
title: Usage
---

Layouts
----------------------------------------------------------------------------

Layouts include 'page', 'post', 'centered', and 'post-index'.

'page' and 'post' are mostly the same, except 'post' wraps content in an
`article` tag and is used for main post.

Simple Design provides the 'post-index' layout to display an index of posts
layed out. This is used in the index page of this site.

'centered' is for content that is positioned in the center of the screen.
This is used by the [404 Page](/bogus)

Variables
----------------------------------------------------------------------------

Create an 'assets/css/main.scss' file, and import the style library.
Variables are set before the import

```scss
---
---

// Declare variables here

// Import file
@import "{{ site.theme }}"
```

<!-- Table -->
<div class="horizontal-scroll">
    <table>
        <thead>
            <tr>
                <th>Category</th>
                <th>Variables</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Font</td>
                <td>
                    <code>$font-family</code> <br>
                    <code>$code-font-family</code>
                </td>
            </tr>
            <tr>
                <td>Spacing</td>
                <td>
                    <code>$spacing-unit</code>
                </td>
            </tr>
            <tr>
                <td>Font Size</td>
                <td>
                    <code>$mega-font-size</code> <br>
                    <code>$large-font-size</code> <br>
                    <code>$medium-font-size</code> <br>
                    <code>$normal-font-size</code> <br>
                    <code>$small-font-size</code>
                </td>
            </tr>
            <tr>
                <td>Colors</td>
                <td>
                    <code>$white-color</code> <br>
                    <code>$light-gray-color</code> <br>
                    <code>$dark-gray-color</code> <br>
                    <code>$black-color</code>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Notes

Currently, dynamic tables need to be fixed so that they work with Markdown.
To fix this, tables will need to be manually entered using html. For example,
the above table is written as:

```html
<div class="horizontal-scroll">
    <table>
        <thead>
            <tr>
                <th>Category</th>
                <th>Variables</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Font</td>
                <td>
                    <code>$font-family</code> <br>
                    <code>$code-font-family</code>
                </td>
            </tr>
            <tr>
                <td>Spacing</td>
                <td>
                    <code>$spacing-unit</code>
                </td>
            </tr>
            <tr>
                <td>Font Size</td>
                <td>
                    <code>$mega-font-size</code> <br>
                    <code>$large-font-size</code> <br>
                    <code>$medium-font-size</code> <br>
                    <code>$normal-font-size</code> <br>
                    <code>$small-font-size</code>
                </td>
            </tr>
            <tr>
                <td>Colors</td>
                <td>
                    <code>$white-color</code> <br>
                    <code>$light-gray-color</code> <br>
                    <code>$dark-gray-color</code> <br>
                    <code>$black-color</code>
                </td>
            </tr>
        </tbody>
    </table>
</div>
```

Alternatively, you can configure `parse_block_html` in your 'config.yml'
To allow for markdown table formatting, although you will need to surround
your table with `<div class="horizontal-scroll">`. This will be fixed in the
future.