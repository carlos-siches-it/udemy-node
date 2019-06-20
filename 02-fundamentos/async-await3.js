let employees = 
[ 
    {Name: "Carlos", id: 1  },
    {Name: "Milton", id: 2  },
    {Name: "Silvia", id: 3  },
]

let salaries = 
[ 
    {salary: 1000, id: 1  },
    {salary: 2000, id: 2  }
]


let getEmployee = async(id) => 
{
    let employeeDB = employees.find( employee => employee.id === id)

    if (!employeeDB)
    {
        throw new Error(`Employee does not exist in Database with the id ${id}`)
    }
    else
    {
        return employeeDB

    }

}

getEmployee(4)
    .then(Employee => console.log(Employee) )
    .catch(e => console.log(e) )




//console.log(getEmployee(1))


//console.log(employers)


