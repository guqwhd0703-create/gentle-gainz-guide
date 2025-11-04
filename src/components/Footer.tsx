const Footer = () => {
  return (
    <footer className="bg-accent/20 border-t py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Easy Fit
            </h3>
            <p className="text-muted-foreground mt-2">
              누구나 시작할 수 있는 운동 프로그램
            </p>
          </div>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>© 2024 Easy Fit. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
