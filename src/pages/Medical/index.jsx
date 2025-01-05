import style from './Team.module.css';
import FormCard from './TeamCard';


const Medical = () => {

    const form = [
        {
            name : 'Fill medical history for dog',
            date : '',
            key : 0, 
        },
        {
            name : 'Fill medical history for cat',
            date : '',
            key : 1, 
        },
    ]

    
    return (
        
        <div className = {style.form}>
            <div className={style.form__title}>
                FILL MEDICAL HISTORY
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
 
export default Medical;