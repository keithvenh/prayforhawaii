require 'csv'
require 'json'

csv = CSV.parse(File.read('Hawaii_Lanai_Molokai.csv', encoding: 'bom|utf-8'), headers: true )

json = []
index = 0

csv.each do |row|
  pastor = row['pastor']
  church = 
  json[index] = {
    "pastor": row['pastor'],
    "church": row['church'],
    "island": row['island'],
    "city": row['city']
  }
  index += 1
end

f = File.open("data.json", "w")
f.puts(json.to_json)