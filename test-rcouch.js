var vouchdb = require('vouchdb');
var VOW = require('dougs_vow') ;

vouchdb.connect("http://localhost:5984");

vouchdb.info()
    .when(
        function(data) { console.log(data);
                         return vouchdb.login('admin', 'irma');

		       })
    .when(
        function(data) { console.log(data);
                         return vouchdb.view('test', 'test', { included_deleted: true }, 'test');
		       })
        
    // .when(
    //     function(data) { console.log(data);
    //                      // return vouchdb.userAdd('myuser', 'irma', []);
    //     	       })
        
    .when(
        function(data) { console.log(data);
		       }
        ,function(err) {
            console.log("error", err);
        }
    );


// View changes - Rcouch offers you the possibility to get incremental view changes (ie using the changes API over a view index. View changes can be filtered using a javascript function or using the view parameters (you can get view changes for a key or a range).

// View-based replication - You can incrementally replicate your documents using a view to filter them. This replication is based on the view changes

// Include deleted documents in view results

// Validate documents on read - Validate if the document can be read by the current user.

// Write-only databases - Only admins and some readers are able to read a database.

// Filter returned fields in changes results

// Improved logging - new logging system using Lager with more granularity in logs

// More stats - more statistics in rcouch

// Some Optimisations and internal changes in the source code. This changes has been added upon the time to fix issues or optimize some processing based on the user and customers feedback.

// Custom extensions - It is easy to add custom extensions to your build using the rcouch system. Extensions built-in for rcouch are _random_docs and _db_updates. Some others extensions are available in the refuge projects.
