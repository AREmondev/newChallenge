import React from 'react'

function UserTable({ user, setUser }) {
  const handleDlt = (mail) => {
    console.log(mail)
    console.log(user)

    let filtered = user.filter((userMail) => userMail.email !== mail)
    setUser([...filtered])
  }
  return (
    <>
      <div className="data-area">
        <div className="container">
          <div className="center">
            <div className="w-75">
              <table id="table" className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">Serial</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user.length > 0 ? (
                    <>
                      {user.map((usr) => (
                        <tr key={user.indexOf(usr) + 1}>
                          <td>{user.indexOf(usr) + 1}</td>
                          <td>{usr.name}</td>
                          <td>{usr.email}</td>
                          <td
                            onClick={() => handleDlt(usr.email)}
                            className="dlt-btn"
                          >
                            delete
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>No Data</>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserTable
