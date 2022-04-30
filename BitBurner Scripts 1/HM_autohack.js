/** @param {NS} ns **/

export async function main(ns) {

	var hosts = [];

	function queryHosts() {
		hosts.push(ns.scan("home"));
	}

	queryHosts();
	ns.print(hosts[0])

	while (true) {
		await ns.sleep(10000);
	}

	/*while (true) {

		queryHosts();

		for (var i = 0; i < hosts.length; i++) {
			if ((ns.hasRootAccess(hosts[i]) == true) && (hosts[i] != "home")) {
				if (ns.fileExists("autohack.js", hosts[i]) == false) {
					await ns.scp("autohack.js", "home", hosts[i])
					ns.exec("autohack.js", hosts[i])
				}
			}
		}

		for (var i = 0; i < hosts.length; i++) {
			if ((ns.hasRootAccess(hosts[i]) == true) && (hosts[i] != "home")) {
				if (ns.getServerSecurityLevel(hosts[i]) <= ns.getHackingLevel()) {
					await ns.grow(hosts[i]);
					await ns.hack(hosts[i]);
					await ns.weaken(hosts[i]);
				}
			} else {
				ns.print("Insufficient level to start hack...")
			}
		}

		await ns.sleep(500);
	};*/
	await ns.sleep(500);
}