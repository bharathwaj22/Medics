import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumbs = () => {
  const location = useLocation();
  const { id } = useParams();

  // Define human-readable names for the routes
  const routeNames = {
    'project-Management': 'Project Management',
    'entry-process': 'Entry Process',
    'processstatus': 'Process Status',
    'paymentstatus': 'Payment Status',
    'pending': 'Pending',
    'settings': 'Settings',
    'people-details': 'People Details',
    'admin-profile': 'Admin Profile',
    'project-view': 'Project View',
    'process-view-details': 'Process View Details',
    'department-form': 'Department Form',
    'profession-form': 'Profession Form',
    'modula-institution': 'Modular Institution',
    'team-coordinator-dashboard': 'Team Coordinator Dashboard',
    'internal-dashboard': 'Internal Dashboard',
    'freelancer-dashboard': 'Freelancer Dashboard',
    'project-manager-dashboard': 'Project Manager Dashboard',
    'modula-department': 'Modular Department',
    'modula-profession': 'Modular Profession',
    'admin-dashboard': 'Admin Dashboard',
    'enter_process_form': 'Enter Process Form',
    'process-status-form': 'Process Status Form',
    'payment-form': 'Payment Form',
    'pending-form': 'Pending Form',
    

  

  };

  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav>
      <ul className="breadcrumbs">
        <li>
          <Link to="/">Home</Link>
        </li>
        <span className="arrow">
          <FontAwesomeIcon icon={faChevronRight} />
        </span>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const routeLabel = routeNames[value] || value; // Use human-readable label or default to the raw value
          
          return (
            <li key={to}>
              <Link to={to}>{routeLabel}</Link>
              {index < pathnames.length - 1 && (
                <span className="arrow">
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              )}
            </li>
          );
        })}

        {id && (
          <li>
            <span>{id}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;

