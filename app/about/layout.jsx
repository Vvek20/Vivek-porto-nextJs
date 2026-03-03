import Footer from "@/components/Footer";

export const metadata = {
  title: "Vivek  | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
