# vue-avatar

User avatar component for VueJS 2.

This component will displayed an avatar for image or a letter avatar if no url image is provided or the image cannot 
be loaded. Avatar image is loaded in background.

## Installation
```
npm install @vcraescu/vue-avatar
```

## Usage

#### ES6

```js
import VueAvatar from "@vcraescu/vue-avatar";

export default {
    ...
    components: {
        VueAvatar,
    },
    ...
}
```

After that you can use it in your templates:
```
<div style="width: 48px">
    <vue-avatar name="John Doe" url="https://i.pravatar.cc/300" block />
</div>
```

## Props
<table class="table">
<thead><tr>
  <th>Name</th><th>Required?</th><th>Default</th><th>Type</th><th>Description</th>
</tr></thead>
<tbody>
  <tr><td>name</td>
    <td> Yes </td>
    <td> - </td>
    <td> String </td>
    <td>The name used to compute letter avatar initials and background color is picked randomly based on this.
    Only first 2 initials will be displayed.</td></tr>
  <tr><td>url</td>
    <td> No </td>
    <td> - </td>
    <td> String </td>
    <td>If the url cannot be loaded, letter avatar will be displayed instead.</td></tr>
  <tr><td>rounded</td>
    <td> No </td>
    <td> false </td>
    <td> Boolean </td>
    <td>True if avatar must be displayed rounded.</td></tr>
  <tr><td>fgColor</td>
    <td> No </td>
    <td> #ffffff </td>
    <td> String </td>
    <td>Color hex code for letter avatar text.</td></tr>
  <tr><td>bgColor</td>
    <td> No </td>
    <td> - </td>
    <td> String </td>
    <td>Force to use this color for letter avatar background instead of random color.</td></tr>
  <tr><td>bgColorPalette</td>
    <td> No </td>
    <td> - </td>
    <td> Array </td>
    <td>Letter avatar background color will be randomly choosen from this array.</td></tr>
  <tr><td>block</td>
    <td> No </td>
    <td> false </td>
    <td> Boolean </td>
    <td>Scales to the size of the containers: width=100%, height=100%</td></tr>
  <tr><td>width</td>
    <td> No </td>
    <td> 100 </td>
    <td> Number </td>
    <td>Set avatar width</td></tr>
  <tr><td>height</td>
    <td> No </td>
    <td> 100 </td>
    <td> Number </td>
    <td>Set avatar height</td></tr>
</tbody>
</table>

##### Default Background Color Palette
<table class="table">
<tbody>
  <tr>
    <td>#e53935</td>
    <td>#d81b60</td>
    <td>#d81b60</td>
    <td>#c51162</td>
  </tr>
  <tr>
    <td>#5e35b1</td>
    <td>#3949ab</td>
    <td>#1e88e5</td>
    <td>#0288d1</td>
  </tr>
  <tr>
    <td>#0097a7</td>
    <td>#00bfa5</td>
    <td>#d81b60</td>
    <td>#00b8d4</td>
  </tr>
  <tr>
    <td>#00bfa5</td>
    <td>#00b8d4</td>
    <td>#00796b</td>
    <td>#2e7d32</td>
  </tr>
  <tr>
    <td>#558b2f</td>
    <td>#827717</td>
    <td>#9e9d24</td>
    <td>#f57f17</td>
  </tr>
  <tr>
    <td>#ff6f00</td>
    <td>#e65100</td>
    <td>#6d4c41</td>
    <td>#4e342e</td>
  </tr>
  <tr>
    <td>#616161</td>
    <td>#455a64</td>
    <td>#263238</td>
    <td>#ff80ab</td>
  </tr>
</tbody>
</table>

## Build Setup

```
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run serve

# build 
npm run build:bundle
```
