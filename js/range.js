let input = document.querySelector('#range');
input.addEventListener('input', ()=>{
    audio.volume = input.value / 100
})

$( '.slider' ).on( 'input', function( ) {
$( this ).css( 'background', 'linear-gradient(to right, #FCEE7E 0%, #FCEE7E '+this.value +'%, transparent ' + this.value + '%, transparent 100%)' );
} );

