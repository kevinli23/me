const cardStyle = {
    card: {
        maxWidth: 350,
        margin: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        '&:hover': {
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        },
        maxHeight: '100%',
        flexDirection: 'column',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center'
    },
    media: {
        height: '300px',
        width: '300px'
    },
    desc: {
        marginBottom: '20px',
        marginLeft: '10px',
        marginRight: '10px'
    },
    learnMore: {
        color: 'black',
        padding: '10px',
        borderRadius: '25px',
        border: '1px solid black',
        height: '13px',
        lineHeight: '13px',
        textAlign: 'center',
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: '#d8d8d8'
        },
        marginTop: 'auto',
        marginBottom: '10px',
        width: '80%',
    },
    title: {
        marginTop: '10px',
        marginBottom: '5px',
        textAlign: 'center'
    },
    icontray: {
        marginTop: '5px',
        marginBottom: '15px',
    },
    subdesc: {
        fontSize: '20px',
        marginTop: '-3px',
    }
};

export default cardStyle;