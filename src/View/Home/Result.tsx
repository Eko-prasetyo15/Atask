import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRepo } from '../../Action';
import LoadingSpinner from './spinner';
import { UserList } from './type'

interface IList {
    data: UserList[];
}
const Result: React.FC<IList> = (data) => {
    const dispatch = useDispatch()
    const repoList = useSelector((state: any) => state.githubList.listRepo)
    const isLoadingRep = useSelector((state: any) => state.githubList.isLoadingRep)


    const clickHandler = (name: string) => {
        dispatch<any>(getRepo(name))
    };

    return (
        <div className="row">
            {data?.data.map((item: UserList, idx: number) => {
                return (
                    <div className="col-sm-12 mb-2" key={idx}>
                        <div className="d-grid">
                            <button className="btn btn-secondary btn-lg" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseWidthExample${idx}`} aria-expanded="false" aria-controls={`collapseWidthExample${idx}`}
                                onClick={() => {
                                    clickHandler(item.login)
                                }}>
                                <div className="repostar mt-2 mb-2">
                                    <h6 className="card-title">{item.login} </h6>
                                    <i className="fa fa-sort-desc" aria-hidden="true"></i>
                                </div>
                            </button>
                        </div>
                        {repoList.length > 0 ? (
                            <div className="collapse" id={`collapseWidthExample${idx}`}>
                                {isLoadingRep ? <LoadingSpinner/> : (
                                    <div style={{ textAlign: 'left' }}>
                                        {repoList.map((item: any) => {
                                            return (
                                                <div className="card card-body mt-2" style={{ width: '100%', backgroundColor: '#EBEBEB' }}>

                                                    <div className="repostar">
                                                        <h5 className="card-title">{item.name} </h5>
                                                        <div>
                                                            <strong className="me-2">{item.watchers_count}</strong>
                                                            <i className="fa fa-star" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {item.description}
                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
     
                            </div>
                        ) : (
                            <div className="collapse" id={`collapseWidthExample${idx}`}>
                                <div className="card card-body mt-2" style={{ width: '100%', backgroundColor: '#EBEBEB' }}>
                                    No Data Found
                                </div>
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default Result