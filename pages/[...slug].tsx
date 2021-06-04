import { GetServerSideProps } from "next";

export default function Redirect() {
  return;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};
