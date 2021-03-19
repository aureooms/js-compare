import test from 'ava';
import * as compare from "../../../src/index.js";



import {format} from "util";

const increasing = compare.fixedcolexicographical( compare.increasing , 5 );
const decreasing = compare.fixedcolexicographical( compare.decreasing , 5 );


function one( t , a, b, z ) {

	t.deepEqual(
		compare.sign( increasing( a, b ) ),
		z,
		format( "i %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

	t.deepEqual(
		compare.sign( decreasing( a, b ) ),
		z === 0 ? 0 : -z,
		format( "d %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

	a = a.concat( Math.random( ) ) ;
	b = b.concat( Math.random( ) ) ;

	t.deepEqual(
		compare.sign( increasing( a, b ) ),
		z,
		format( "i %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

	t.deepEqual(
		compare.sign( decreasing( a, b ) ),
		z === 0 ? 0 : -z,
		format( "d %s %s", JSON.stringify( a ), JSON.stringify( b ) )
	);

};


test( "fixedcolexicographical", t => {

	one( t , [1, 6, 7, 8, 9], [1, 6, 7, 8, 9], 0 );

	one( t , [0, 6, 7, 8, 9], [1, 6, 7, 8, 9], -1 );
	one( t , [1, 6, 7, 8, 9], [0, 6, 7, 8, 9], 1 );

	one( t , [9, 8, 7, 6, 0], [9, 8, 7, 6, 1], -1 );
	one( t , [9, 8, 7, 6, 1], [9, 8, 7, 6, 0], 1 );

	one( t , [0, 6, 6, 6, 6], [1, 7, 7, 7, 7], -1 );
	one( t , [1, 6, 6, 6, 6], [0, 7, 7, 7, 7], -1 );

	one( t , [6, 6, 6, 6, 0], [7, 7, 7, 7, 1], -1 );
	one( t , [6, 6, 6, 6, 1], [7, 7, 7, 7, 0], 1 );

});
