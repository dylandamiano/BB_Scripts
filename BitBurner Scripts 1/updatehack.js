/** @param {NS} ns **/

export async function main(ns) {

	var hosts = [];

	function queryHosts() {
		hosts = ns.scan(ns.getHostname());
	}

	while (true) {
		
		queryHosts();

		for (var i=0; i < hosts.length; i++) {
			if ( (ns.hasRootAccess(hosts[i]) == true) && (hosts[i] != "home") ) {
				if (ns.fileExists("autohack.js", hosts[i]) == true) {
					ns.kill("autohack.js", hosts[i])
					ns.rm("autohack.js", hosts[i])
				}
			} else if ( (ns.hasRootAccess(hosts[i]) == false) && (hosts[i] != "home") ) {
				if (ns.fileExists("autohack.js", hosts[i]) == true) {
					ns.kill("autohack.js", hosts[i])
					ns.rm("autohack.js", hosts[i])
				}
			}
		}

		await ns.sleep(500);
	};

}