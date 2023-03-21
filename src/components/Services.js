function Services() {
    return (
        <section id="services">
            <h2>Services</h2>
            <ol>
                <li>Web Development</li>
                <li>Backend Development</li>
                <li>Data Analysis</li>
            </ol>
            <div >
                <h3>Projects I have worked on:</h3>
                <ul style={{ fontWeight: 'bold', display:"grid" }}>
                    <li>Bloom - HR Management application with Java Microservices deployed using Helm to EKS</li>
                    <li>OneDoor Way - REST APIs development using Java SpringBoot and authentication using Spring Security</li>
                </ul>
            </div>
            <div style={{ fontWeight: 'bold' ,display:"grid" }}>
                <h3>Tech stacks I have worked with:</h3>
                <ul>
                    <li>Kubernetes</li>
                    <li>Helm</li>
                    <li>Docker</li>
                    <li>GitHub Actions</li>
                    <li>AWS</li>
                    <li>Java</li>
                    <li>SpringBoot</li>
                    <li>Python</li>
                    <li>Junit5</li>
                </ul>
            </div>

        </section>
       
    );
}
export default Services