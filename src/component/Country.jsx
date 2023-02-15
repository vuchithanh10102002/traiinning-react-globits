import { useEffect, useState } from 'react';
import FormCountry from './FormCountry';
import FormDelete from './FormDelete';
import { CountryData } from './CountryData';


function Country() {
  const [ openFormEdit, setOpenFormEdit ] = useState(false);
  const [ openFormAdd, setOpenFormAdd ] = useState(false);
  const [ listCountries, setListCountries ] = useState(CountryData);
  const [ openDelete, setOpenDelete] = useState(false)
  const [ editCountry, setEditCountry ] = useState({
    name: '',
    code: '',
    description: ''
  })
  const [ deleteCountry, setDeleteCountry ] = useState({
    name: '',
    code: '',
    description: ''
  })

  const handleOpenFormAdd = () => {
    setOpenFormAdd(!openFormAdd);
  };

  const handleCloseFormAdd = () => {
    setOpenFormAdd(!openFormAdd);
  };

  const onSubmitAdd = (prop) => {
    if(prop.name !== '' && prop.code !== '' && prop.description !== '') {
      setListCountries((prev) => [...prev, prop]);
    }
    
  };

  // useEffect(() => {
  //   setListCountries(listCountries)
  // }, [listCountries])

  const handleOpenFormEdit = (e) => {
    setOpenFormEdit(!openFormEdit);
    const a = {
      name: '',
      code: '',
      description: ''
    }
    const idCountry = e.target.parentElement.parentElement.id;
    listCountries.map((e, index) => {
      if(index === Number(idCountry)) {
        a.name = e.name;
        a.code = e.code;
        a.description = e.description;
      }
    });
    setEditCountry(a)
  }

  const handleCloseFormEdit = () => {
    setOpenFormEdit(!openFormEdit);
  };
  

  const onSubmitEdit = (prop) => {
    const newListCountries = listCountries;
    newListCountries.map((e, index) => {
      if (e.name === editCountry.name) {
        newListCountries.fill(prop, index, index + 1);
      }
    })
    setListCountries(newListCountries);
    setOpenFormEdit(!openFormEdit);
  }

  const handleCloseFormDelete = () => {
    setOpenDelete(!openDelete);
  }

  const handleOpenFormDelete = (e) => {
    setOpenDelete(!openDelete);
    const a = {
      name: '',
      code: '',
      description: ''
    }
    const idCountry = e.target.parentElement.parentElement.id;
    listCountries.map((e, index) => {
      if(index === Number(idCountry)) {
        a.name = e.name;
        a.code = e.code;
        a.description = e.description;
      }
    });
    setDeleteCountry(a);
  }

  const onSubmitDelete = (prop) => {
    const newListCountries = listCountries;
    newListCountries.map((a, index) => {
      if(a.name === prop.name) {
        newListCountries.splice(index, 1);
      }
    });
    setListCountries(newListCountries);
    setOpenDelete(!openDelete);
  }

  return (
    <div className="main flex flex-col items-center mt-10">
        <button
            className="px-5 py-2 bg-sky-500 rounded block"
            onClick={handleOpenFormAdd}
          >
            Add Country
        </button>

        <table className="table-auto table-country">
          <thead>
            <tr className='text-2xl'>
              <th className='p-5'>Name</th>
              <th className='p-5'>Code</th>
              <th className='p-5'>Description</th>
              <th className='p-5'>Edit</th>
              <th className='p-5'>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              listCountries.map((e, index) => (
                <tr key={index} id={index} className="text-xl">
                  <td className='p-5'>{e.name}</td>
                  <td className='p-5'>{e.code}</td>
                  <td className='p-5'>{e.description}</td>
                  <td className='p-5'>
                    <button onClick={handleOpenFormEdit} className='px-5 py-2 bg-amber-500 rounded'>Edit</button>
                  </td>
                  <td className='p-5'>
                    <button onClick={handleOpenFormDelete} className='px-5 py-2 bg-lime-400 rounded'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

        {openDelete && <FormDelete submit={onSubmitDelete} deleteCountry={deleteCountry} closeFormDelete={handleCloseFormDelete}/>}
        {openFormAdd && (
          <FormCountry
            handleCloseForm={handleCloseFormAdd}
            type="Add"
            submit={onSubmitAdd}
            edit={{
              name: "",
              code: "",
              description: "",
            }}
          />
        )}
        {openFormEdit && 
          <FormCountry 
            handleCloseForm={handleCloseFormEdit} 
            type="Edit" 
            submit={onSubmitEdit} 
            edit={editCountry}
          />
        }
    </div>
  );
}

export default Country;
