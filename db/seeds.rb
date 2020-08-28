cars = ['Zenvo ST1', 'Koenigsegg One:1', 'Pagani Huayra', 'Aston Martin One-77']
cars.each{|car| Car.create(name: car, age: (2010..2020).to_a.sample.to_s)}
