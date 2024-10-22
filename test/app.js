const libsqlClient = require("@libsql/client")

async function main() {
	const turso = libsqlClient.createClient({
		url: process.env.TURSO_DATABASE_URL,
		authToken: process.env.TURSO_AUTH_TOKEN,
	});

	const clientId = 1;
	
	const res1 = await turso.execute({
		sql: "SELECT * FROM client WHERE id = ?",
		args: [clientId],
	});

	console.log(res1)
	
	const res2 = await turso.execute({
		sql: "SELECT * FROM log WHERE client_id = ?",
		args: [clientId],
	});

	console.log(res2)
}


main()
