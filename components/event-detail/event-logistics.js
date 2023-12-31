import classes from "./event-logistics.module.css";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import LogisticsItem from "./logistics-item";

function EventLogistics(props) {
    const { date, address, image, imageAlt } = props;

    
  
    const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const addressText = address.replace(', ', '\n');
  
    return (
      <section className={classes.logistics}>
        <div className={classes.image}>
          <img src={`/${image}`} alt={imageAlt} />
        </div>
        <ul className={classes.list}>
          <LogisticsItem icon={DateIcon}>
            <time>{humanReadableDate}</time>
          </LogisticsItem>
          <LogisticsItem icon={AddressIcon}>
            <address>{addressText}</address>
          </LogisticsItem>
        </ul>
      </section>
    );
  }
  
  export default EventLogistics;
  