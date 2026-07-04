import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterForm from "@/components/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="min-h-screen pt-16">
      <Navbar />
      <RegisterForm />
      <Footer />
    </main>
  );
}