import React from "react";
import SearchInput from "../UI/Input/SearchInput";
import Card from "../UI/Card/Card";
import PersonsListItem from "./PersonsListItem";

const PersonList = (props) => {
    
    return (
            <Card>
                <SearchInput />
                <div className="flex flex-col p-1">
                    <div className="overflow-auto max-h-96 p-2 sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        {/* <div className=""> */}
                            <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                <th scope="col" className="px-6 py-4">#</th>
                                <th scope="col" className="px-6 py-4">Name</th>
                                <th scope="col" className="px-6 py-4">Age</th>
                                <th scope="col" className="px-6 py-4">Email</th>
                                <th scope="col" className="px-6 py-4">Phone</th>
                                <th scope="col" className="px-6 py-4">Actions</th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                {   props.data.map(person =>
                                    <PersonsListItem person={person} />
                                )}


                                {/* <tr
                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                <td className="whitespace-nowrap px-6 py-4">Mark</td>
                                <td className="whitespace-nowrap px-6 py-4">Otto</td>
                                <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                                <td className="whitespace-nowrap px-6 py-4">mdo mdo mdo</td>
                                <td className="whitespace-nowrap px-3 py-4"><Button >Edit</Button> <DeleteButton>delete</DeleteButton></td>
                                </tr>
                                <tr
                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                                <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                                <td className="whitespace-nowrap px-6 py-4">@fat</td>
                                <td className="whitespace-nowrap px-6 py-4">fat fat fat</td>
                                </tr>
                                <tr
                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                <td className="whitespace-nowrap px-6 py-4">Larry</td>
                                <td className="whitespace-nowrap px-6 py-4">Wild</td>
                                <td className="whitespace-nowrap px-6 py-4">@twitter</td>
                                <td className="whitespace-nowrap px-6 py-4">twitter twitter twitter</td>
                                </tr> */}
                            </tbody>
                            </table>
                        {/* </div> */}
                        </div>
                    </div>
                </div>
            </Card>
    );
}
export default PersonList