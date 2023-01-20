import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../Action'
import Filter from './Filter'
import Result from './Result'
import LoadingSpinner from './spinner'


const Home: React.FC<any> = () => {
    const dispatch = useDispatch()
    const [githubUser, setGithubUser] = useState()
    const userList = useSelector((state: any) => state.githubList.listUsers)
    const isLoading = useSelector((state: any) => state.githubList.isLoading)

    useEffect(() => {
        if (githubUser) {
            dispatch<any>(getUser(githubUser))
        }
    }, [githubUser, dispatch])

    return (
        <>
            <div className="container mt-3" style={{ maxWidth: '540px' }}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="p-2">
                            <div className="mb-3">
                                <Filter
                                    setGithubUser={(i: any) => setGithubUser(i)}
                                />
                            </div>
                            {githubUser ? (
                                <div className="mb-3" style={{ color: '#5C636A', textAlign: 'left' }}>
                                    <span >Showing users for {githubUser}</span>
                                </div>
                            ) : null}
                            <div>
                                {isLoading ? <LoadingSpinner /> : <Result data={userList} />}       
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home