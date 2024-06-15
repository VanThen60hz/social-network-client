const SearchUser = () => {
    const handleSearchUser = () => {
        console.log("search user...");
    };

    // const handleClick = (id) => {
    //     console.log(id);
    // };

    return (
        <div>
            <div className="py-5 relative">
                <input
                    type="text"
                    className="bg-transparent border border-[#c1c8e8] outline-none w-full px-5 py-3 rounded-full"
                    onChange={handleSearchUser}
                    placeholder="search user..."
                />
            </div>

            {/* {false && (
                <Card>
                    <CardHeader
                        className="pointer"
                        onClick={() => handleClick()}
                        avatar={
                            <Avatar src="https://res.cloudinary.com/dbo5fc7j0/image/upload/v1717540128/meow-social/avatar-anh-meo-cute-3_sexket.jpg" />
                        }
                        title="Nguyễn Thị Ngọc Meow"
                        subheader={"meowmeow"}
                    />
                </Card>
            )} */}
        </div>
    );
};

export default SearchUser;
