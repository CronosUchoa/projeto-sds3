function DataTable() {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2017</td>
                        <td>Barry Allen 0</td>
                        <td>34</td>
                        <td>30</td>
                        <td>25017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2018</td>
                        <td>Barry Allen 1</td>
                        <td>34</td>
                        <td>29</td>
                        <td>23017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2019</td>
                        <td>Barry Allen 2</td>
                        <td>34</td>
                        <td>28</td>
                        <td>22017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2020</td>
                        <td>Barry Allen 3</td>
                        <td>34</td>
                        <td>27</td>
                        <td>21017.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen 4</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;
