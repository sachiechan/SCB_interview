import { CSSProperties } from 'react';

const styles = {
    container: () : CSSProperties => ({
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        height: '350px',
        border: '1px solid gray',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '20px',
        marginLeft: '20px',
    }),
    title: () : CSSProperties => ({
        display: 'flex',
        justifyContent: 'center'
    }),
    formItem: () : CSSProperties => ({
        padding: '10px'
    }),
    input: () : CSSProperties => ({
        height: '24px',
        width: '160px',
    }),
    select: () : CSSProperties => ({
        height: '30px',
        width: '168px',
    }),
    label: () : CSSProperties => ({
        display: 'inline-block',
        marginRight: '10px',
        fontSize: '18px',
        width: '80px',
        fontWeight: 'bold'
    }),
    summary: () : CSSProperties => ({
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        fontSize: '18px',
        fontWeight: 'bold'
    }),
    submitContainer: () : CSSProperties => ({
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px',
        width: '280px'
    }),
    submit: () : CSSProperties => ({
        height: '40px',
        width: '120px',
        backgroundColor: '#4af09d',
        fontSize: '18px'
    }),
    status: () : CSSProperties => ({
        marginTop: '30px',
        display: 'flex',
        justifyContent: 'center',
        fontSize: '18px',
        fontWeight: 'bold'
    }),
    loading: () : CSSProperties => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    })
};

export default styles;