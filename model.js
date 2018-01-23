//model.js
const uuid = reuqire('uuid');

const SerialTrack = {
	create: function(company, invoice, product, serial){
		const entry = {
			id: uuid.v4(),
			company: company,
			invoice: invoice,
			product: product,
			serial: serial,
			date: Date.now()
		};
		this.entries.push(entry);
		return entry;
	},
	get: function(){
		return this.entries.map();
	},
	delete: function(id){
		
	}
};