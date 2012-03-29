jsonml = function( obj ) {
	function __isArray( obj ) {
		return typeof( obj )=='object' && ( obj instanceof Array );
	};
	var element = document.createElement( obj[ 'tag' ] || obj[ 't' ] || obj[ '!' ] ||'div' );
	for( var index in obj ) {
		var thisPart = typeof obj[ index ] == 'function' ? obj[ index ]( ) : obj[ index ];

		if( index == 'content' || index == '>' ){
			if( __isArray( thisPart ) ) {
				for( var i = 0, ic = thisPart.length; i < ic; i++ ) {
					element.appendChild( jsonml( thisPart[ i ] ) );
				}
			} else if( typeof thisPart == 'string' ) {
				element.appendChild( document.createTextNode( thisPart ) );
			}
		} else if( index == '#' || index == 'id') {
			element[ 'id' ] = thisPart;
		} else if( index == '.' || index == 'class' || index == 'className') {
			element[ 'className' ] = __isArray( thisPart ) ?
				thisPart.join( ' ' ) :
				thisPart

		} else if( index != 'tag' && index != 't' ) {
			element[ index ] = thisPart;
		}
	}
	return element;
}