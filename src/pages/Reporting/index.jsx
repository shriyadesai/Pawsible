import style from './Forms.module.css';
import FormCard from './FormCard';


const Reporting = () => {

    const form = [
        {
            name : 'Report a dog',
            date : '',
            key : 0, 
        },
        {
            name : 'Report a cat',
            date : '',
            key : 1, 
        },
    ]

    
    return (
        
        <div className = {style.form}>
            <div className={style.form__title}>
                REPORTING
            </div>
            <div className={style.form__cards}>
                {
                form.map(member => (
                    <FormCard name={member.name} date={member.date} key={member.key}/>
                ))}
            </div>
            
        </div>
    );
}
 
export default Reporting;