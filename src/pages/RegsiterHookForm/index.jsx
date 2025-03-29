import {useForm} from 'react-hook-form';

const RegsiterHookForm = () => {
  const {
    register
  } = useForm();

  return (
    <div className="col-6 offset-3">
      <div class="mb-3">
        <label for="" class="form-label">
          Username
        </label>
        <input 
          type="text" 
          class="form-control" 
          placeholder="Username"
          {...register("username", {
            required: {value: true, message: "Required Error"}, // Bắt buộc nhập
            maxLength: {value: 100, message: ""},
            minLength: {value: 5, message: ""},
            min: {value: 0, message: ""},
            max: {value: 100, message: ""},
            pattern: {value: "", message: ""},
            valueAsNumber: true,
            valueAsDate: true
          })}
        />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Password
        </label>
        <input type="text" class="form-control" placeholder="Password" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" placeholder="Name" />
      </div>

      <div class="mb-3">
        <label for="" class="form-label">
          Class
        </label>
        <select class="form-select form-select-lg" name="" id="">
          <option selected value="-1">----------Select Class----------</option>
          <option value="1">WD19301</option>
          <option value="2">WD19302</option>
          <option value="3">WD19303</option>
          <option value="4">WD19304</option>
        </select>
      </div>

      <button type="button" class="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default RegsiterHookForm;
