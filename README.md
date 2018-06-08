<p align="center">
  <a href="https://shiminq.github.io/multicolorslider/">
    <img alt="multicolorslider" src="https://github.com/shiminq/multicolorslider/blob/master/demo.JPG" width="480">
  </a>
</p>

# multicolorslider

Multi-color slider implemented in ReactJS.  Configurable number of segments and colors! 


## Install
```sh
npm i multicolorslider
```

## Run locally

To run the example App locally:

```sh
npm install
npm run build
npm start
```

Open [localhost:2222](http://localhost:2222/).

## Usage

```jsx
import ColorSlider from 'multicolorslider'
```


```jsx

<ColorSlider
  min={Number}
  max={Number}
  name={String}
  thresholds={Array}
  colors={Array}
  onChange={Function}
/>
``` 

### Props
Prop   	 			 |  Type      |   Default |  Description
---------   	 |  -------   |  -------      |  -----------
`min`     		 |  number    |  				   	|  minimum value on the slider
`max`    			 |  number    |  				  |  maximum value on the slider
`name`       |  string    |             |  name of the slider
`thresholds`  |  array    |  []          |  array of thresholds with array [0] == min and array[length -1] == max
`colors`     |  array  |     []          |  array of color codes, each representing a color segment on the slider in a sequence.  The array length is equal to the thresholds array length - 1
`onChange` | function |          | call back function whenever slider changes a value/threshold



## License

Please check the [LICENSE](LICENSE) file.