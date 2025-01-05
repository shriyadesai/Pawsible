import style from './Forms.module.css';
import Button from "../../components/design/Buttons";

const FormCard = ({date,name}) => {
    return ( 
        <div className={style.formcard}>
            <div className={style.formcard__details}>
                <div className={style.details__name}>
                    <h3>
                        {name}
                    </h3>
                </div>
                <div className={style.details__date}>
                    <p>
                        {date}
                    </p>
                </div>
            </div>
            <div className={style.div__over__button}>
            <Button
                onHandle={() => {
                    window.location.href = "https://forms.gle/WFdgnLLkJ3eXdMFb8";
                    console.log("Hi");
                  }}
                  disabled={false}>
                REPORT
                </Button>
                </div>
        </div>
    );
}
 
export default FormCard;