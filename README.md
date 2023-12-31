# <a href="https://www.theodinproject.com/lessons/foundations-etch-a-sketch" >Etch-a-Sketch</a>

<p>Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. <strong>Tip</strong>: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.</p>
<ul>
  <li>
    Research button tags in HTML and how you can make a JavaScript function run when one is clicked.    
  </li>
  <li>
    Also check out prompts.
  </li>
  <li>
    You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
  </li>
</ul>

# Add ons
<p>Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.</p>

<ol>
  <li>
    Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.
  </li>
  <li>
    Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.    
  </li>
</ol>
