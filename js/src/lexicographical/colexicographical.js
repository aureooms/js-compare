
/**
 * Generates a binary colexicographical comparator
 * from a binary comparator.
 *
 * https://en.wikipedia.org/wiki/Lexicographical_order#Colexicographic_order
 *
 * compare( a, b ) should always return
 *   - a negative value if a < b
 *   - a positive value if a > b
 *   - zero if a === b
 *
 * compare should express an increasing ordering
 */

const colexicographical = function ( compare ) {

	/**
	 * Compares 2 arrays a and b colexicographically.
	 */

	return function ( a , b ) {

		const m = a.length ;
		const n = b.length ;

		const len = Math.min( m , n ) ;

		for ( let i = 1 ; i <= len ; ++i ) {

			const d = compare( a[m-i], b[n-i] ) ;

			if ( d !== 0 ) return d ;

		}

		return m - n ;

	} ;

} ;

exports.colexicographical = colexicographical ;
