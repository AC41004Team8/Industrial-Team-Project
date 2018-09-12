//class to store data about the store
class Store
{
  constructor(name, type)
  {
	this.name = name;
    this.type = type;
    this.days = new Array(31);
  }
}
//class to store records about one day of store performance 
class Day
{
  constructor()
  {
    this.records = new Array(11);
  }  
}
//class to store a record of store's performance in one hour period
class Record
{
  constructor(date, peopleIn, cRate)
  {
    this.date = date;
    this.peopleIn = peopleIn;
    this.cRate = cRate;
  }
}
//generates fake data which shows how the provided store performed during the past month
function generateDataForStore(storeName)
{
	for (i = 0; i < 31; i++)
	{
		var day = new Day();
		var luck = Math.random() * (2 - 0.5) + 0.5;
		for (j = 0; j < 11; j++)
		{
			var date = new Date();
			date.setDate(date.getDate()-i);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setHours(j);
			
			var peopleIn = -luck*(j+8-7.5)*(j+8-18.5)+Math.floor((Math.random() * 20)-10);
			peopleIn = Math.floor(peopleIn);
			if (peopleIn < 10)
				peopleIn = 10;
			var cRate = 0;
			switch (storeName.type)
			{
				case "Retail":
					cRate = Math.floor((Math.random() * 41)+20); //ranges 20-60%
					break;
				case "Food and Drinks":
					cRate = Math.floor((Math.random() * 31)+60);//ranges 60-90%
					break;
				case "Service":
					cRate = Math.floor((Math.random() * 41)+50);//ranges 50-90%
					break;
			}
			day.records[j] = new Record(date, peopleIn, cRate);
		}
		storeName.days[i] = day;
	}
}

//executable code. creates shop. generates data for it. displays all the data in an alert.
var example = new Store("Top Shop", "Retail");
generateDataForStore(example);
alert(example.toSource());
