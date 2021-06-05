import { InferGetStaticPropsType } from "next";

export default function Timestamp({ datetime }: InferGetStaticPropsType<typeof getStaticProps>) {
  return datetime;
}

export const getStaticProps = async () => {
  const datetime = new Date().toLocaleString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    second: "numeric",
  });

  return {
    props: {
      datetime,
    },
    revalidate: 10,
  };
};
