//select color input -- not sure if need .val() on canvas
const canvas = $('#pixelCanvas');
const gridHeight = $('#inputHeight').val();
const gridWidth = $('#inputWidth').val();
let color = $('#colorPicker');
// on clicking submit button
$('#sizePicker').on('submit', function(event) {
	event.preventDefault();
	let gridHeight = $('#inputHeight').val();
	let gridWidth = $('#inputWidth').val();
	makeGrid();

//Setting up to create table 
function makeGrid() {
	//remove table
	$('table tr').remove();
	//create x amt of table rows
  let tr, td;
	for (let x = 0; x < gridHeight; x++) {
		tr = $('<tr></tr>');
  
	//create y amt of table cells and append rows
		for (let y = 0; y < gridWidth; y++) {
			td = $('<td></td>');
      tr.append(td);
			}
  //append rows to the main table
  canvas.append(tr);
}
}   

//add color and remove color
  $('table td').click(function addColor() {
      let color = $('#colorPicker').val();
    
      if ($(this).attr('style'))  {
          $(this).removeAttr('style')
      } else  {
          $(this).attr('style', 'background-color:' + color);
      }
  })
  /*remove borders function
  This works, then stops working?*/
$('#removeLines').on('click', function(){
  $('tr, td').toggleClass('blank-grid');
})
  });

/*Need to finish
1. Erase grid fx
2. add mouseup/down fx to draw
3. redesign layout
4. figure out grid on/off
5. add spray can icon
6. optimize
7. spray paint animation? */