import Enzyme from 'enzyme'
import EnzymeAdaptor from 'enzyme-adapter-react-16'

Enzyme.configure(
    {
        adapter:new EnzymeAdaptor(),
        disableLifeCycleMethods:true
    }
);