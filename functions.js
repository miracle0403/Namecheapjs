function forcastDomain( domain, tld ){
	var dor = domain.split( '.' );
			var name = dor[0];
			var str = tld.toString( );
			var tsr = str.split( ',' ).join( ','+name );
			var spi = tsr.split( ',' );
			var fi = name + spi[0];
			var po = spi.pop( );
			var doma = spi.unshift( fi );
			var DomainList = doma.toString( )
			return DomainList;
}