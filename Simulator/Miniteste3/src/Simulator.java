import eduni.simjava.Sim_system;

public class Simulator {
	private static double simulationTime = 100000;
	
	public static void main(String[] args) {
		// Initialise Sim_system
		Sim_system.initialise();
		// Add the Source
		Source Scheduler = new Source("Source", 50);
		// Add the Server
		ClientServer Server = new ClientServer("ClientServer", 30);
		
		// Link the entities' ports
		Sim_system.link_ports("Source", "Out", "Source", "In");
		Sim_system.link_ports("Source", "Out1", "ClientServer", "In");
		Sim_system.link_ports("ClientServer", "Out", "Source", "In1");
		
		// Run the simulation
		Sim_system.set_trace_detail(false, true, false);
		Sim_system.set_termination_condition(Sim_system.TIME_ELAPSED, simulationTime, false);
		Sim_system.run();
	}
}