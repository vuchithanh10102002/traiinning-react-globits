function FormDelete({ submit, deleteCountry, closeFormDelete }) {
    
    return (
        <>
            <form action="" onSubmit={(e) => e.preventDefault()} className="h-auto w-64 bg-slate-300 absolute top-1/4 left-1/3 text-center p-4 rounded">
                <p>Bạn có muốn xóa không</p>
                <div className="flex justify-center items-center mt-5">
                    <button type="submit" onClick={() => submit(deleteCountry)} className="block w-24 p-2 mr-2 bg-red-500 rounded-md">OK</button>
                    <button onClick={closeFormDelete} className="block w-24 p-2 bg-red-500 rounded-md">Cancle</button>
                </div>
            </form>
        </>
    );
}

export default FormDelete