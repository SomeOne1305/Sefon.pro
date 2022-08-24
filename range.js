let input = document.querySelector('#range');
input.addEventListener('input', ()=>{
    console.log(input.value / 100);
})
$( '.slider' ).on( 'input', function( ) {
$( this ).css( 'background', 'linear-gradient(to right, #ffde01 0%, #ffde01 '+this.value +'%, #7398c5 ' + this.value + '%, #7398c5 100%)' );
} );