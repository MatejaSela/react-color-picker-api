# React color-picker (API version)

This is an example of our color picker redone using React.

In particular, this was done using the API version of React, including the React code directly through the [CDN](https://reactjs.org/docs/cdn-links.html). This is not the preferred approach, but it works for small components, and allows us to ease you into the React Way.

In class, we developed the `LabeledSlider` component as a class with state, and then migrated the state up to the parent `ColorPicker`. You can see this version if you walk back a few commits in Git. 

For the present version, `LabeledSlider` has been transformed into a **Functional Component**. In React, if the component truly has no state, then we can replace it with a "pure function" -- one in which the output is purely a function of the inputs. The input in this case would be the `props` and the output would be a React element. In other words, we boil the component down to just the `render()` function, and the only real difference is that we use `props` instead of `this.props`.   


