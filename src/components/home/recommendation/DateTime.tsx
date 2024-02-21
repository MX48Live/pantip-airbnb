function DateTime({ date }: { date: string }) {
  function convertDate(date: string) {
    return new Intl.DateTimeFormat("th-TH", {
      day: "numeric",
      month: "short",
    }).format(new Date(date));
  }

  return <div>{convertDate(date)}</div>;
}

export default DateTime;
