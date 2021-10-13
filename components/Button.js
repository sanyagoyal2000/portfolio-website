import Button from "@material-tailwind/react/Button";
function Buttons({filter, button}) {
    return (
        <Button>
            {
                button.map((but, i) =>{
                    return <Button key={i} onClick={() => filter(but)}>
                        {but}
                    </Button>
                })
            }
        </Button>
    )
}

export default Buttons
