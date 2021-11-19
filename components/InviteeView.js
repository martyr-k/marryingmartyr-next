import styles from "./styles/InviteeView.module.css";

const InviteeView = ({
  alias,
  invitedGuests,
  attendance,
  email,
  rsvp,
  confirmedGuests,
  openModal,
  identifier,
}) => {
  const handleClick = () => {
    openModal({ alias, attendance, email, identifier });
  };

  return (
    <tr className={styles.tableRow}>
      <td>
        <span className="cursor-pointer text-primary" onClick={handleClick}>
          {alias}
        </span>
        {email && <span> ✅</span>}
        {rsvp && <span> 💒</span>}
        <p className="mt-1 mb-0">Invited Guests:</p>
        {invitedGuests.map((guest, index) => {
          return (
            <p className="mb-0" key={index}>
              {guest}
            </p>
          );
        })}
      </td>
      <td className="text-end">
        {attendance}
        {attendance === "in-person" && (
          <>
            <p className="mt-1 mb-0">Confirmed Guests:</p>
            {confirmedGuests.map((guest, index) => {
              return (
                <p className="mb-0" key={index}>
                  {guest}
                </p>
              );
            })}
          </>
        )}
      </td>
    </tr>
  );
};

export default InviteeView;
