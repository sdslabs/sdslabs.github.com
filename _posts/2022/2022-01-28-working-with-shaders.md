---
 layout: post
 title: Working with shaders
 excerpt: In 3D graphics, shaders are essentially programs that describe ...
 author:
   name: Archit Gosain
   link: https://github.com/aviii06
   bio: Developer, SDSLabs
   image: avi.jpg
---
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>

In 3D graphics, shaders are essentially programs that describe a behaviour about a pixel or vertex. Vertex shader runs for every vertex of the [mesh](https://en.wikipedia.org/wiki/Polygon_mesh), whereas a pixel shader runs for every pixel of the object.

  

You can think of pixel shaders as HTML5 canvas. You can manipulate the color of every specific pixel. In this blog, we will focus mainly on Pixel Shaders.

  

## **The UV coordinates**

Pixel shaders coordinate system is [standard](https://docs.microsoft.com/en-us/windows/win32/direct3d9/texture-coordinates) coordinates are normalized to fit in interval {0,1} so that the pixel shader could scale for any random texture.
![](https://docs.microsoft.com/en-us/windows/win32/direct3d9/images/uvcoordinates.jpg)
![](https://docs.microsoft.com/en-us/windows/win32/direct3d9/images/texadr1.png)


You can quickly write pixel shaders on [SHADERTOY](https://www.shadertoy.com/). You can focus on writing shaders as it handles the pipeline for you. You write the code in essentially GLSL; there are a few differences, but it’s nearly the same thing.

  

  

## Circle

Since this assumes no prior knowledge of writing shaders, I thought the first example should be explained thoroughly and built from scratch. If you have written shaders before or are familiar with the structure, [here is the code](https://www.shadertoy.com/view/NdSyDR)


```
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Getting the uv coordinates
    vec2 uv = fragCoord/iResolution.xy;

    // This gives the length of uv
    float dist = length(uv);            

    // Initializing col with black color
    vec3 col = vec3(0.0,0.0,0.0);   

    // Initializing a radius
    float radius = 0.5;                 

    // Starting an if block
    if(dist < radius)                   
    {
        col = vec3(1.0,1.0,1.0);    // Setting col to white
    }
    
    // this sets fragColor which is our retrun value
    fragColor = vec4(col,1.0);         
}
```

 This is the basic structure.

-   `vec2`, `vec3`, `vec4` are just arrays of the `float` of sizes $$2$$,$$3$$, $$4$$, respectively.
-   `fragColor` is the output color of the pixel of coordinate uv.
-   `length()` is a function that returns the magnitude of the vector.
-   `iResolution`is called a **constant buffer**. This specific constant buffer is provided by default from shadertoy and gives the resolution of the used window. There are other constant buffers, too, e.g., `iTime`.

  

Logic is elementary; we set the `col` (a `vec3`) to have rgb values of black initially and update it to white if the `dist` (distance from the origin) is less than $$0.5$$.

  

Running this, you’ll see the circle is more like an ellipse is also not centred.

Hence we update the uv coordinates as such:

`uv-=0.5;`

  
To fix the ellipse issue, we change the distance as follows:

`float dist = length(uv*iResolution.xy)/min(iResolution.x ,iResolution.y);`

**Final Result:**

<iframe src="https://www.shadertoy.com/embed/NdSyDR" width="100%" height="375" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  

## Rectangle

How do we make a rectangle?

 
Just write a function that contains a few if statements [like this](https://www.shadertoy.com/view/fdBcWz).

**Result:**

<iframe src = "https://www.shadertoy.com/embed/fdBcWz" width="100%" height="360" ></iframe>



One can also use [Manhattan distance](https://en.wikipedia.org/wiki/Manhattan_distance) as our distance function [like here](https://www.shadertoy.com/view/NdScDR). I just used some good old matrix transformation for rotating it.
**Result:**
<iframe src = "https://www.shadertoy.com/embed/NdScDR" width="100%" height="360"></iframe>

  

We can also use [smooth steps](https://thebookofshaders.com/glossary/?search=smoothstep).

  

## Water Shader

A straightforward water shader is just using distortion. We can use a du/dv map and move it to create distortion. We can then add two or three maps to our uv values and mixed reflection and refraction textures to give a [satisfying result](https://www.shadertoy.com/view/7dcGzf).
<iframe src = "https://www.shadertoy.com/embed/7dcGzf" width="100%" height="360"></iframe>

  

Let’s try to make something more cartoonish.

  

Meet Voronoi Diagrams.

  

Voronoi diagrams are excellent. Essentially color of a specific point in a plane depends on its nearest point. This coloring divides the plane into multiple segments.


<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Euclidean_Voronoi_diagram.svg/1920px-Euclidean_Voronoi_diagram.svg.png" alt="drawing" width="500"/>

We can also generalise it to any metric possible, giving aesthetically pleasing results. You only need a set of points and a metric, and for that, there would exist a unique Voronoi diagram.

  

They are cool [do check them out](https://en.wikipedia.org/wiki/Voronoi_diagram)

  

So let’s make a Voronoi diagram and have the points move! Color it, and there is your cartoonish [water shader](https://www.shadertoy.com/view/NdVXRG).

<iframe src = "https://www.shadertoy.com/embed/NdVXRG" width="100%" height="360"></iframe>
  

## Fire Shader

I decided to use Fractal Brownian Motion on simplex noise for this. Then I added a gradient and have `uv.y` continuously decreasing, giving the illusion that the fire is moving upwards. Yeah, it’s certainly complicated, so let’s go over them one by one. 

  

**Simplex noise** is a type of noise, like Perlin noise. The function noise generates this.

  

**The Fractal Brownian Motion** combines multiple steps of Simplex Noise (or another similar noise function), each with a different frequency and amplitude.

 [Here is the result](https://www.shadertoy.com/view/7tc3zs) left is simplex noise and right is fractal brownian motion.
<iframe src = "https://www.shadertoy.com/embed/NtGGRc" width="100%" height="360"></iframe>

We color this and [we're done](https://www.shadertoy.com/view/7tc3zs).


  

  

## Cel shader

Playing Legend of Zelda is an experience. The graphics are aesthetically beautiful. It just feels different, but why is that? One can tell it is not going for realistic looks but rather making it cartoonish.

Let’s talk about shading a 3-d object. Most people use [Phong Shading](https://en.wikipedia.org/wiki/Phong_shading); normals are interpolated across polygon faces, and through interpolated normals, we now color the pixel using the new normal. This mathematical trick saves a lot of polygon count as now we can have a realistic-looking surface with a low poly count.

  

![Phong Shading](https://upload.wikimedia.org/wikipedia/commons/3/3d/Phong-shading-sample_%28cropped%29.jpg)

  

We need to quantise the number of colors it can have. You can even quantise the normal angles if you get the normal data.
[Here is the final shader](https://www.shadertoy.com/view/7tV3DK)
<iframe src = "https://www.shadertoy.com/embed/7tV3DK" width="100%" height="360">


  

## Edge Detection

Edge detection is one of the ways to implement an outline shader. As the name suggests, it creates outlines.

  

![](https://miro.medium.com/max/1400/1*I_GeYmEhSEBWTbf_kgzrgQ.png)

  

But before diving into this, let’s talk about image convolution.

  

Image convolution is a way to change images using kernels(basically a matrix).

Here is how it works. Let's assume an image $$I$$. $$I(x,y)$$ gives the pixel color at location $$(x,y)$$, $$dx (= dy)$$ is the pixel width, and $$f$$ is the kernel of $$(2a+1)*(2b+1)$$. $$f(x,y)$$ gives the $$(x,y)th$$ element with $$x\in(-a,a)\ and\ y\in(-b,b))$$ .

  

Then the new image $$H$$ can be formed by:

$$H (x,y)= \sum_{dx=-a}^{a}\sum_{dy=-b}^{b} I(x,y)*f(x+dx,y+dy)$$

  

So okay, what does it have to do with anything? If you notice, this gives us the ability to have a new image. The new image will depend on how the image reacts to the kernel, i.e., every pixel in the new image contains the information of its neighbouring pixels. We can use that; we can thus extrapolate if there is a sudden change of color; if there is a sudden change of color, that means it might be an edge. [Sobel operator](https://en.wikipedia.org/wiki/Sobel_operator) is one such kernel.

  

[Here is an outstanding video explaining the same](https://www.youtube.com/watch?v=8rrHTtUzyZA&ab_channel=TheJuliaProgrammingLanguage)

  

We first run a gaussian blur to remove noises( can be achieved by a [Gaussian kernel](https://www.researchgate.net/figure/Discrete-approximation-of-the-Gaussian-kernels-3x3-5x5-7x7_fig2_325768087)). Then we run a Sobel filter. After this, we get the edges.

  

You can also apply [canny edge detection](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.420.3300&rep=rep1&type=pdf), which goes a step further.
