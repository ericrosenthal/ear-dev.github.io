(function(a){a.fn.encapsulatedPlugin=function(h,c,j,d){function f(i,k){return function(){for(var l=0;l<k.length;l++){k[l][i].apply(k[l][i],arguments)}}}var b=[];j.each(function(){if(!a.data(this,"encapsulated:"+h)){var i=c(this,d);if(jQuery.isFunction(i.setup)){i.setup()}a.data(this,"encapsulated:"+h,i)}b.push(a.data(this,"encapsulated:"+h))});b=a(b);var g=b[0];if(g){for(var e in g){if(a.isFunction(g[e])){b[e]=f(e,b)}}}b.$=j;return b}})(jQuery);